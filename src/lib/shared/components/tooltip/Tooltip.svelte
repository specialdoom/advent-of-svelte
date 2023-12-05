<script lang="ts">
	let { label = 'label', children } = $props<{ children: any; label?: string }>();
</script>

{#snippet content()}
	<span
		class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
		role="tooltip"
	>
		{label}
	</span>
{/snippet}

<div class="hs-tooltip inline-block">
	<span class="hs-tooltip-toggle">
		{@render children()}
	</span>
	{@render content()}
</div>
