<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';

	let heartRate = $state(0);
	let interval: number | undefined = undefined;

	async function fetchHeartRate() {
		const path = new URL('/api/heart-rate', $page.url.origin);

		const response = await fetch(path, { method: 'GET' });
		const data = await response.json();

		heartRate = data.heartRate;
	}

	onMount(async () => {
		await fetchHeartRate();

		interval = setInterval(async () => {
			await fetchHeartRate();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

{#if heartRate > 0}
	<div
		class="w-full flex rounded backdrop-blur-sm bg-white/30 col-span-1 px-2 py-2 h-9 items-center gap-2 text-1xl"
	>
		<span class="heart">❤️</span>
		<strong>{heartRate}bpm</strong>
	</div>
{/if}

<style>
	.heart {
		animation: beat 0.8s infinite alternate;
		transform-origin: center;
	}

	/* Heart beat animation */
	@keyframes beat {
		to {
			transform: scale(1.2);
		}
	}
</style>
