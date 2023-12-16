import { http } from '$lib/shared/services';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const tasks = await http.task().getAll();

    return { tasks };
  } catch (e) {
    console.error('💀 could not retrieve tasks', e);
    return { tasks: [] };
  }
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;

    if (!firstName || !lastName) {
      return { succes: false, error: "No empty names" }
    }

    const { elfFirstName, elfLastName } = await nameGenerator(firstName, lastName);

    if (elfFirstName && elfLastName) {
      return { success: true, name: `${elfFirstName} ${elfLastName}` }
    } else {
      return { success: false, warning: "Could not find a name for you!" }
    }
  }
};

async function nameGenerator(firstName: string, lastName: string) {
  const { firstNames, lastNames } = await http.name().getAll();

  const matchingFirstNames = firstNames.filter(x => x.includes(firstName[0]));
  const matchingLastNames = lastNames.filter(x => x.includes(lastName[0]));

  const elfFirstName = matchingFirstNames.map(x => ({ value: x, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(x => x.value).at(0);
  const elfLastName = matchingLastNames.map(x => ({ value: x, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(x => x.value).at(0);

  return { elfFirstName, elfLastName }
}