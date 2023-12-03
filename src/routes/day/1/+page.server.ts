import { http } from '$lib/server/services';
import type { PageServerLoad } from '../../day-1/$types';

export const load: PageServerLoad = async () => {
	try {
		const children = await http.children().getAll();

		return { children };
	} catch (e) {
		console.error('💀 could not retrieve children', e);
		return { children: [] };
	}
};
