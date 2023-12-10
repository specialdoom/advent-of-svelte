import { http } from '$lib/shared/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const rawPresents = await http.present().getAll();
    const presents = rawPresents.map((x, i) => ({ ...x, id: i }))

    return { presents };
  } catch (e) {
    console.error('💀 could not retrieve presents', e);
    return { presents: [] };
  }
};

