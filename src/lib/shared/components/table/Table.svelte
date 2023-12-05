<script lang="ts">
	import TableBody from './TableBody.svelte';
	import TableHead from './TableHead.svelte';
	import TableRow from './TableRow.svelte';

	type Props = {
		header: any;
		row: any;
		data: any[];
	};

	let { data, header, row } = $props<Props>();
</script>

<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
	{#if header}
		<TableHead>
			<TableRow>
				{@render header()}
			</TableRow>
		</TableHead>
	{/if}
	{#if row}
		<TableBody>
			{#each data as item}
				<TableRow>{@render row(item)}</TableRow>
			{/each}
		</TableBody>
	{/if}
	<slot />
</table>
