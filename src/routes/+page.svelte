<script lang="ts">
	import Table from '$lib/components/table/Table.svelte';
	import TableCell from '$lib/components/table/TableCell.svelte';
	import TableRow from '$lib/components/table/TableRow.svelte';

	const headers = ['Name', 'Tally', 'Naughty'];
</script>

<Table {headers}>
	<TableRow>
		<TableCell>Bogdan</TableCell>
		<TableCell>100</TableCell>
		<TableCell>Naughty</TableCell>
	</TableRow>
</Table>
