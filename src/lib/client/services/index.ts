import getSnowflakes from './snowflakes';

export let snow: any;

export function initServices() {
	snow = getSnowflakes();
}
