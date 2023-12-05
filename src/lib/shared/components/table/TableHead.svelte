<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<thead class="bg-gray-50 dark:bg-slate-800">
	{@render children()}
</thead>
