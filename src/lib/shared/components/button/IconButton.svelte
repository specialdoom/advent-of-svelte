<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	type Props = {
		icon: ConstructorOfATypedSvelteComponent;
		className?: string;
		onclick?: EventHandler;
	};

	let { icon, className, ...rest } = $props<Props>();
</script>

<button
	type="button"
	class="{className} hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
	{...rest}
>
	<svelte:component this={icon} />
</button>
