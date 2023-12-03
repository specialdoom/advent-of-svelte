import { building } from '$app/environment';
import { init } from '$lib/server';

if (!building) {
	init();
}
