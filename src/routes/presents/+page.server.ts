import { http } from '$lib/shared/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const tasks = await http.task().getAll();

    return { tasks };
  } catch (e) {
    console.error('💀 could not retrieve tasks', e);
    return { tasks: [] };
  }
};

