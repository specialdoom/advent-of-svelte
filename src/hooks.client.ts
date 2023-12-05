import { building } from '$app/environment';
import { init } from '$lib/client';

// Initializes client app
if (!building) {
	init();
}
