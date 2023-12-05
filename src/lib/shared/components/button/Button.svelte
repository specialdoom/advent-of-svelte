<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	type Variant = 'primary' | 'outline';

	let {
		variant = 'primary',
		disabled = false,
		children,
		onclick
	} = $props<{ variant?: Variant; disabled?: boolean; children: any; onclick?: EventHandler }>();

	const primaryClass =
		'border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600';
	const outlineClass =
		'border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600';
</script>

<button
	class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border disabled:pointer-events-none {variant ===
	'primary'
		? primaryClass
		: ''} {variant === 'outline' ? outlineClass : ''}"
	{disabled}
	{onclick}
>
	{@render children()}
</button>
