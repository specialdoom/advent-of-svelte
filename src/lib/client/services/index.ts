import getDayJs from './date';
import getSnowflakes from './snowflakes';

export let snow: any;

export let dayjs: any

export function initServices() {
	snow = getSnowflakes();
	dayjs = getDayJs();
}
