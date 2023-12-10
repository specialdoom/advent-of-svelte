import { building } from '$app/environment';
import { init as initSharedServices } from '$lib/shared';

if (!building) {
	initSharedServices();
}
