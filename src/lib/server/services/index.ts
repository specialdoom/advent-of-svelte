import getHttpClient, { type HttpClient } from "./http";

/** Standalone variable for creating the http requests. */
export let http: HttpClient;

export function initServices() {
	http = getHttpClient();
}