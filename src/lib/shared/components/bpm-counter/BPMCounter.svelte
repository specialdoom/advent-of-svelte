<script lang="ts">
	import { onDestroy } from 'svelte';

	let tap = 0;
	let timeout: number;
	let bpm = 0;

	function onButtonClick() {
		const now = Date.now();
		bpm = Math.floor((1 / ((now - tap) / 1000)) * 60);
		tap = now;

		clearCount();
		trackInactivity();
	}

	function clearCount() {
		clearTimeout(timeout);
	}

	function trackInactivity() {
		timeout = setTimeout(() => {
			bpm = 0;
		}, 5000);
	}

	onDestroy(() => clearCount());
</script>

<button
	onclick={onButtonClick}
	class="flex items-center flex-col items-center justify-center h-36 gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600e"
>
	{bpm}
	Tap to the music!
</button>