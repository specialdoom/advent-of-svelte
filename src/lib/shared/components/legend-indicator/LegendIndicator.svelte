<script lang="ts">
	let { label } = $props<{ label: string }>();
</script>

<div class="inline-flex items-center">
	<span class="w-2 h-2 inline-block bg-green-500 rounded-full me-2"></span>
	<span class="text-gray-600 dark:text-gray-400">{label}</span>
</div>
