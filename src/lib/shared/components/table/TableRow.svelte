<script lang="ts">
	let { children } = $props<{ children: any }>();
</script>

<tr>
	{@render children()}
</tr>
