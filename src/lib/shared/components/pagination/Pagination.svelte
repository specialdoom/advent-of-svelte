<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '../button/Button.svelte';

	let {
		total,
		page = 0,
		pageSize = 6,
		next,
		prev
	} = $props<{
		total: number;
		page: number;
		pageSize: number;
		next: () => void;
		prev: () => void;
	}>();

	let totalPages = $derived(Math.ceil(total / pageSize));
</script>

<div>
	<p class="text-sm text-gray-600 dark:text-gray-400">
		<span class="font-semibold text-gray-800 dark:text-gray-200">{pageSize}</span> of {total} results
	</p>
</div>

<div>
	<div class="inline-flex gap-x-2">
		<Button disabled={page === 0} onclick={prev}>Previous</Button>
		<Button disabled={page === totalPages} onclick={next}>Next</Button>
	</div>
</div>
