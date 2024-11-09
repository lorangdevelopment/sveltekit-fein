/**
 * Maps a number from one range to another using linear interpolation
 * @param {number} min - The lower bound of the input range
 * @param {number} max - The upper bound of the input range
 * @param {number} nmin - The lower bound of the target range
 * @param {number} nmax - The upper bound of the target range
 * @param {number} value - The input value to map from the first range
 * @returns {number} The mapped value in the target range
 */

const mapRange = (min: number, max: number, nmin: number, nmax: number, value: number) => {
	return ((value - min) / (max - min)) * (nmax - nmin) + nmin;
};

/**
 * @param {number} min - The lower boundary of the range
 * @param {number} max - The upper boundary of the range
 * @param {number} value - The value to clamp
 * @returns {number} The clamped value between min and max
 */

const clamp = (min: number, max: number, value: number) => {
	return Math.max(min, Math.min(value, max));
};

/**
 * @param {number} min - The lower boundary of the range
 * @param {number} max - The upper boundary of the range
 * @param {number} value - The value to normalize
 * @returns {number} A normalized value between 0 and 1
 */

const normalize = (min: number, max: number, value: number) => {
	return clamp(0, 1, (value - min) / (max - min));
};

/**
 * Rounds a number to a specified number of decimal places with high precision
 * @param {number} value - The number to round
 * @param {number} decimals - Number of decimal places to round to
 * @returns {number} The rounded number
 *
 * Example:
 * roundToDecimals(3.14159, 2)  // returns 3.14
 * roundToDecimals(1.005, 2)    // returns 1.01 (handles floating point precision)
 * roundToDecimals(10.123, 1)   // returns 10.1
 */

const roundToDecimals = (value: number, decimals: number): number => {
	const factor = Math.pow(10, decimals);
	return Math.round((value + Number.EPSILON) * factor) / factor;
};

export { mapRange, clamp, normalize, roundToDecimals };
