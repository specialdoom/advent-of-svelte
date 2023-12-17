<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/shared/components/button/Button.svelte';
	import LegendIndicator from '$lib/shared/components/legend-indicator/LegendIndicator.svelte';
	let { data, form } = $props();

	type Expense = {
		description: string;
		price: number;
	};

	let totalExpenses = $state();
	let expenses: Expense[] = $state([]);
	let totalSpent = $derived(expenses.reduce((a, c) => a + c.price, 0));
	let remaining = $derived(Number(totalExpenses) - totalSpent);

	let description = $state('');
	let price = $state('');

	function onButtonClick() {
		if (Number.isNaN(price)) {
			alert('price is not a number');
		}

		expenses = [...expenses, { description, price: Number(price) }];

		description = '';
		price = '';
	}
</script>

<LegendIndicator label="Part of day 5, day 11 and day 16" />
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
			{task.minutesTaken}minutes
		</li>
	{/each}
	<li
		class="flex justify-between items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
	>
		<a href="/presents">See more tasks...</a>
	</li>
</ul>

<div>
	<form method="POST" use:enhance>
		<input type="first-name" />
		<input type="last-name" />
		<button type="submit">Submit</button>
		{form?.error}
		{form?.name}
	</form>
</div>

<div class="w-full">
	Reamining: {remaining}
	<input placeholder="Total expenses" bind:value={totalExpenses} />
	{#each expenses as exp}
		<div>{exp.description} : {exp.price}</div>
	{/each}
	<input
		type="text"
		name="description"
		placeholder="description"
		bind:value={description}
	/>
	<input type="text" name="price" placeholder="price" bind:value={price} />
	<Button onclick={onButtonClick}>Add expense</Button>
</div>

<div class="w-full">
	{#each data.hangar as row}
		<div class="flex justify-between gap-4">
			{#each row as col}
				<div class="flex jusitfy-center gap-4">
					{col}
				</div>
			{/each}
		</div>
	{/each}
</div>
