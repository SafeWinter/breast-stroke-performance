/**
 * Given a string, return a boolean indicating whether the string is a valid date string.
 * 
 * @param value A string to be tested, format: "YYYY-MM-DD"
 * @example "2024-07-12" => true
 */
export interface StringPredicate {
    (value: string): boolean;
}

/**
 * Given a number, return a boolean indicating whether the number is a non-negative integer.
 * 
 * @param value A number to be tested, format: "YYYY-MM-DD"
 * @example "2024-07-12" => true
 */
export interface NumberPredicate {
    (value: number): boolean;
}

export interface RawRecordData {
    // Swim date, e.g. "2024-07-12"
    date: string;
    // Swim time, e.g. "24:17"
    time: string;
    // The number of loops, integer
    loop: number;
    // Distance per loop, unit: m
    loopSize: number;
}

export interface RawRecord {
    data: RawRecordData[];
}

export interface Record {
    // Swim date
    date: Date;
    // Total measured time in seconds
    seconds: number;
    // The number of loops, integer
    loop: number;
    // Distance per loop, unit: m
    loopSize: number;
    // Below are calculated values
    // Total distance, unit: m
    distance: number;
    // Average speed per loop, unit: s/loop
    speedLoop: number;
    // Average speed per km, unit: s/km
    speed1Km: number;
}