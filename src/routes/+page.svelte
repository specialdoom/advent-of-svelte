<script lang="ts">
	import Button from '$lib/shared/components/button/Button.svelte';
	import Card from '$lib/shared/components/card/Card.svelte';
	import Dropdown from '$lib/shared/components/dropdown/Dropdown.svelte';
	import DropdownItem from '$lib/shared/components/dropdown/DropdownItem.svelte';
	import Pagination from '$lib/shared/components/pagination/Pagination.svelte';
	import Table from '$lib/shared/components/table/Table.svelte';
	import TableCell from '$lib/shared/components/table/TableCell.svelte';
	import TableFooter from '$lib/shared/components/table/TableFooter.svelte';
	import TableHeader from '$lib/shared/components/table/TableHeader.svelte';
	import TablePanel from '$lib/shared/components/table/TablePanel.svelte';
	import TableWrapper from '$lib/shared/components/table/TableWrapper.svelte';
	import Tag from '$lib/shared/components/tag/Tag.svelte';

	let { data } = $props();

	let page = $state(0);
	const pageSize = 5;
	let totalPages = $derived(Math.ceil(data.children.length / pageSize));
	let children = $state(data.children.slice(0, pageSize));

	let filter = $state<string[]>([]);

	$effect(() => {
		children = data.children
			.filter((x) => {
				if (filter.length === 0 || filter.length === 2) {
					return true;
				}

				if (filter.includes('naughty')) {
					return x.tally < 0;
				}

				if (filter.includes('nice')) {
					return x.tally >= 0;
				}

				return true;
			})
			.slice(page, page + pageSize);
	});

	function onNext() {
		const nextPage = page + 1;

		if (nextPage === totalPages) {
			page = totalPages;
		} else {
			page = nextPage;
		}
	}

	function onPrev() {
		const prevPage = page - 1;

		if (prevPage === 0) {
			page = 0;
		} else {
			page = prevPage;
		}
	}
</script>

<div class="max-w-[85rem] py-4 mx-auto">
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
		<Card title="Nicest">
			{#snippet icon()}
				🎅
			{/snippet}
			{data.nicest?.name}
		</Card>
		<Card title="Naughtiest">
			{#snippet icon()}
				👺
			{/snippet}
			{data.nicest?.name}
		</Card>
	</div>
</div>
<TableWrapper>
	<TablePanel title="Children's list" description="This year's list">
		{#snippet toolbar()}
			<Dropdown label="Filter">
				{#snippet items()}
					<DropdownItem>
						<div class="flex items-center h-5 mt-1">
							<input
								id="hs-dropdown-item-checkbox-delete"
								name="hs-dropdown-item-checkbox-delete"
								type="checkbox"
								class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								bind:group={filter}
								value="nice"
							/>
						</div>
						<label for="hs-dropdown-item-checkbox-delete" class="ms-3.5">
							<Tag variant="green">Nice</Tag>
						</label>
					</DropdownItem>
					<DropdownItem>
						<div class="flex items-center h-5 mt-1">
							<input
								id="hs-dropdown-item-checkbox-archive"
								name="hs-dropdown-item-checkbox-archive"
								type="checkbox"
								class="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								bind:group={filter}
								value="naughty"
							/>
						</div>
						<label for="hs-dropdown-item-checkbox-archive" class="ms-3.5">
							<Tag variant="red">Naughty</Tag>
						</label>
					</DropdownItem>
				{/snippet}
			</Dropdown>
		{/snippet}
	</TablePanel>
	<Table data={children}>
		{#snippet header()}
			<TableHeader>Name</TableHeader>
			<TableHeader>Tally</TableHeader>
			<TableHeader>Naughty or Nice</TableHeader>
		{/snippet}
		{#snippet row(item: { name: any; tally: number; })}
			{@const isNice = item.tally >= 0}
			<TableCell>{item.name}</TableCell>
			<TableCell>{item.tally}</TableCell>
			<TableCell>
				<Tag variant={isNice ? 'green' : 'red'}>
					{isNice ? 'Nice' : 'Naughty'}
				</Tag>
			</TableCell>
		{/snippet}
	</Table>
	<TableFooter>
		<Pagination total={data.children.length} {page} {pageSize} next={onNext} prev={onPrev} />
	</TableFooter>
</TableWrapper>
