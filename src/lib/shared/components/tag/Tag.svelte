<script lang="ts">
	let { variant, children } = $props<{ variant: 'red' | 'green'; children: any }>();
</script>

<span
	class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium {variant ===
	'red'
		? 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500'
		: ''} {variant === 'green'
		? 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500'
		: ''}"
>
	{@render children()}
</span>
