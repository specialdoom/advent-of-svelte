import { building } from '$app/environment';
import { init as initClientServices } from '$lib/client';
import { init as initSharedServices } from "$lib/shared";

// Initializes client app
if (!building) {
	initSharedServices();
	initClientServices();
}
