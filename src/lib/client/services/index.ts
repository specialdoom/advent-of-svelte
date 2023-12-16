import getDayJs from './date';

export let dayjs: any

export function initServices() {
	dayjs = getDayJs();
}
