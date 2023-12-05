<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
	{@render children()}
</tbody>
