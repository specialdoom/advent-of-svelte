<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<th
	scope="col"
	class="ps-6 pe-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
>
	{@render children()}
</th>
