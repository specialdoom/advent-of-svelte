<script lang="ts">
	import Button from '$lib/shared/components/button/Button.svelte';
	import LegendIndicator from '$lib/shared/components/legend-indicator/LegendIndicator.svelte';

	let { data } = $props();

	const maxWeight: number = 100;
	let presents = $state(data.presents);
	let sleigh: any[] = $state([]);
	let progress: number = $derived(
		sleigh.reduce((acc, current) => {
			acc += presents.find((p) => p.id === current)?.weight;

			return Math.round((acc / maxWeight) * 100);
		}, 0)
	);
</script>

<h2 class="text-3xl dark:text-white">Sleigh load balancer</h2>
<LegendIndicator label="Part of day 3" />
<div class="grid grid-rows-3 grid-flow-col gap-7 h-96">
	<div class="row-span-3">
		<div class="flex w-full h-full flex-col gap-4">
			<h4 class="text-xl dark:text-white">Progress</h4>
			<div class="progress-bar" style="--progress: {progress}%;"></div>
		</div>
	</div>
	<div class="col-span-2 items-center justify-center">
		<div class="flex w-full h-full flex-col gap-4">
			<h4 class="text-xl dark:text-white">Presents</h4>
			<div class="flex flex-row flex-wrap gap-2">
				{#each presents.slice(0, 10) as present}
					<label
						for="hs-vertical-checkbox-in-form-{present.name}"
						class="max-w-xs flex p-3 block w-auto bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
					>
						<input
							type="checkbox"
							class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
							id="hs-vertical-checkbox-in-form-{present.name}"
							bind:group={sleigh}
							value={present.id}
						/>
						<span class="text-sm text-gray-500 ms-3 dark:text-gray-400">
							{present.name}
							<span
								class="inline-flex items-center gap-x-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"
							>
								🎁 {present.weight} kg
							</span>
						</span>
					</label>
				{/each}
				<Button>Show all presents</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.progress-bar {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background: radial-gradient(closest-side, transparent 80% 100%),
			conic-gradient(#cb1d3a var(--progress), #e5ac68 0);
	}
</style>
