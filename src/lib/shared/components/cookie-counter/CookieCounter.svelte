<script lang="ts">
	import Button from '../button/Button.svelte';

	let cookies = $state(0);
	let cookiesNo = $derived(cookies);

	function increment() {
		cookies = cookies + 1;
	}

	function decrement() {
		cookies = cookies - 1;
	}

	function reset() {
		cookies = 0;
	}
</script>

<div class="flex gap-1 items-center">
	<Button variant="outline" onclick={decrement} disabled={cookies === 0}>-</Button>
	<input
		type="text"
		class="block w-12 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
		bind:value={cookies}
	/>
	<Button variant="outline" onclick={increment}>+</Button>
</div>
