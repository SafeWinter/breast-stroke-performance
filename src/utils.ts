import {RawRecordData, Record, StringPredicate, NumberPredicate} from './types';

const validNaturalNumber: NumberPredicate = (num: number) => {
    return Number.isInteger(num) && num >= 0;
}
const validDate: StringPredicate = (date: string) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}
const validTime: StringPredicate = (time: string) => {
    return /^\d{2}:\d{2}$/.test(time);
}
const validLoop: NumberPredicate = (loop: number) => {
    return validNaturalNumber(loop);
}
const validLoopSize: NumberPredicate = (loopSize: number) => {
    return validNaturalNumber(loopSize);
}

const validRecordData: (record: RawRecordData) => boolean = (record: RawRecordData) => {
    return validDate(record.date) && validTime(record.time) && validLoop(record.loop) && validLoopSize(record.loopSize);
}
function computeSpeedLoop(seconds: number, loop: number): number {
    const centiSecs = (100 * seconds / loop).toFixed(0);
    return parseInt(centiSecs) / 100;
}

function computeSecondsCost(mm_ss: string): number {
    const [mm, ss] = mm_ss.split(':');
    return parseInt(mm) * 60 + parseInt(ss);
}

function computeSpeed1Km(distance: number, seconds: number): number {
    return parseFloat((seconds * 1000 / distance).toFixed(4));
}

export function parseRecord(record: RawRecordData): Record | never {

    if(!validRecordData(record)) {
        throw new Error(`Invalid record data: ${record}`);
    }
    
    const {date: dateStr, time, loop, loopSize} = record;
    const date: Date = new Date(dateStr);
    const seconds: number = computeSecondsCost(time);
    const distance: number = loop * loopSize;
    const speedLoop: number = computeSpeedLoop(seconds, loop);
    const speed1Km: number = computeSpeed1Km(distance, seconds);
    
    return {
        date,
        distance,
        loop,
        loopSize,
        seconds,
        speed1Km,
        speedLoop,
    };
}


/**
 * Computes the speed per km in the format mm'ss"
 * 
 * @param item  target piece of data to compute speed per km
 * @returns speed per km in the format mm'ss"
 */
export function computeSpeedPerKm(item: Record): string {
    const { speed1Km } = item;
    const mm = Math.floor(speed1Km / 60);
    const sec = (speed1Km % 60);
    const ss = sec.toFixed(2).padStart(5, '0'); // Ensures the format xx.xx
    return `${mm}'${ss}"`;
}