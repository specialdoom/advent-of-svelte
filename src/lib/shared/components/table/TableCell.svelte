<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<td class="h-px w-72 whitespace-nowrap text-xs font-semibold text-gray-800 dark:text-gray-200">
	<div class="ps-6 pe-6 py-2">
		{@render children()}
	</div>
</td>
