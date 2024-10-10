import {rawRecords} from './data';
import { parseRecord, computeSpeedPerKm, computeSpeedPerLoop } from './utils';

const lg = console.log;
// lg(rawRecords)
// lg(rawRecords.data.map(parseRecord));
const data = rawRecords.data.map(parseRecord);
const lastRecord = data[data.length - 1];
const latestSpeed = computeSpeedPerKm(lastRecord);
lg(`Latest speed: ${latestSpeed}/km`);

const speedPerLoop = computeSpeedPerLoop(lastRecord);
lg(`Speed per loop: ${speedPerLoop}/loop`);

const distanceTotal = data.reduce((acc, {distance}) => acc + distance, 0);
lg(`Total distance: ${distanceTotal} m`);
// const speeds = data.map(computeSpeedPerKm);
// lg(speeds.filter(s => s.substring(0,2)==='22'))
// lg(data.filter(d => computeSpeedPerKm(d).substring(0, 2) === '22'))