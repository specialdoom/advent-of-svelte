<script lang="ts">
	let { label, items } = $props<{ label: string; items: any }>();
</script>

<div class="hs-dropdown relative sm:inline-flex z-20 [--auto-close:inside]">
	<button
		id="hs-dropdown-auto-close-inside"
		type="button"
		class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
	>
		{label}
	</button>

	<div
		class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
		aria-labelledby="hs-dropdown-auto-close-inside"
	>
		{@render items()}
	</div>
</div>
