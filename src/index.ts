import {rawRecords} from './data';
import { parseRecord, computeSpeedPerKm } from './utils';

const lg = console.log;
// lg(rawRecords)
// lg(rawRecords.data.map(parseRecord));
const data = rawRecords.data.map(parseRecord);
const distanceTotal = data.reduce((acc, {distance}) => acc + distance, 0);
lg(`Total distance: ${distanceTotal} m`);

const speeds = data.map(computeSpeedPerKm);
// lg(speeds.filter(s => s.substring(0,2)==='22'))
lg(data.filter(d => computeSpeedPerKm(d).substring(0, 2) === '22'))