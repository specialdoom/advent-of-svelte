<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<div
	class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
>
	{@render children()}
</div>
