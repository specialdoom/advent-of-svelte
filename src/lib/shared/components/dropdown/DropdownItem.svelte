<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<div
	class="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
>
	{@render children()}
</div>
