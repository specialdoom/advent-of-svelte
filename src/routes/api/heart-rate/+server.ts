import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { http } from '$lib/shared/services';

/** @type {import('./$types').RequestHandler} */
export const GET: RequestHandler = (async () => {
  const response = await http.heart().getRate();

  return json(response);
})