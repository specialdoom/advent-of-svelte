<script lang="ts">
	import TableHead from './TableHead.svelte';
  import TableHeader from './TableHeader.svelte';
	import TableRow from './TableRow.svelte';

	type Props = {
		headers: string[];
	};

	let { headers } = $props<Props>();
</script>

<div class="flex flex-col w-full">
	<div class="-m-1.5 overflow-x-auto">
		<div class="p-1.5 min-w-full inline-block align-middle">
			<div class="border rounded-lg overflow-hidden dark:border-gray-700">
				<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
					<TableHead>
						<TableRow>
							{#each headers as header}
								<TableHeader>{header}</TableHeader>
							{/each}
						</TableRow>
					</TableHead>
					<slot />
				</table>
			</div>
		</div>
	</div>
</div>
