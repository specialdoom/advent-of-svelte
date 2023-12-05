import { http } from '$lib/server/services';
import type { Child } from '$lib/server/services/http/modules/child';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const children = await http.children().getAll();
    const { naughtiest, nicest } = getNaughtiestAndNicest(children);
    const { nicePct, naughtyPct } = getNicestAndNaughtiestPercentage(children);

    return { children, naughtiest, nicest, nicePct, naughtyPct };
  } catch (e) {
    console.error('💀 could not retrieve children', e);
    return { children: [] };
  }
};

function getNaughtiestAndNicest(children: Child[]) {
  return children.reduce(
    (acc, current) => {
      if (!acc.naughtiest && !acc.nicest) {
        acc.naughtiest = current;
        acc.nicest = current;
      }

      if (acc.naughtiest && current.tally < acc.naughtiest.tally) {
        acc.naughtiest = current;
      }

      if (acc.nicest && current.tally > acc.nicest.tally) {
        acc.nicest = current;
      }

      return acc;
    },
    { naughtiest: undefined, nicest: undefined } as {
      naughtiest: Child | undefined;
      nicest: Child | undefined;
    }
  );
}

function getNicestAndNaughtiestPercentage(children: Child[]) {
  const { niceCount, naughtyCount } = children.reduce(
    (acc, current) => {
      if (current.tally >= 0) {
        acc.niceCount = acc.niceCount + 1;
      } else {
        acc.naughtyCount = acc.naughtyCount + 1;
      }

      return acc;
    },
    { niceCount: 0, naughtyCount: 0 }
  );

  return {
    nicePct: (niceCount / children.length) * 100,
    naughtyPct: (naughtyCount / children.length) * 100
  };
}
