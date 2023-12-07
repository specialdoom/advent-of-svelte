import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { http } from '$lib/server/services';

/** @type {import('./$types').RequestHandler} */
export const GET: RequestHandler = (async () => {
  return json(await http.heart().getRate());
})