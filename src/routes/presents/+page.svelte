<script lang="ts">
	import LegendIndicator from '$lib/shared/components/legend-indicator/LegendIndicator.svelte';
	import dayjs from 'dayjs';
	let { data } = $props();
</script>

<LegendIndicator label="Part of day 5" />
<ul
	class="max-w-xs flex flex-col overflow-y-auto max-h-96 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50"
>
	<li
		class="flex justify-between items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
	>
		Latest tasks
	</li>
	{#each data.tasks.slice(0, 5) as task}
		<li
			class="flex justify-between items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
		>
			{task.task === 'CREATED_TOY' ? '🪀' : '🎁'}
			{task.elf}
			{dayjs().to(task.date)}
			{task.minutesTaken}minutes
		</li>
	{/each}
	<li
		class="flex justify-between items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
	>
		<a href="/presents">See more tasks...</a>
	</li>
</ul>
