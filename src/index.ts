import {rawRecords} from './data';
import { parseRecord } from './utils';

const lg = console.log;
lg(rawRecords)
// lg(rawRecords.data.map(parseRecord));
const data = rawRecords.data.map(parseRecord);
const distanceTotal = data.reduce((acc, {distance}) => acc + distance, 0);
lg(`Total distance: ${distanceTotal} m`);