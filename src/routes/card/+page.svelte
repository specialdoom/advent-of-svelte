<script lang="ts">
	let decorations = $state([...new Array(11).keys()].map((x) => x + 1));

	function dragstartHandler(ev: any) {
		// Add the target element's id to the data transfer object
		ev.dataTransfer.setData('application/my-app', ev.target.id);
		ev.dataTransfer.effectAllowed = 'move';
	}

	function dragoverHandler(ev: any) {
		ev.preventDefault();
		ev.dataTransfer.dropEffect = 'move';
	}

	function dropHandler(ev: any) {
		ev.preventDefault();
		// Get the id of the target and add the moved element to the target's DOM
		const data = ev.dataTransfer.getData('application/my-app');
		const newNode = document.getElementById(data)?.cloneNode();
		ev.target.appendChild(newNode);
	}
</script>

<div class="flex">
	<div class="flex flex-col">
		{#each decorations as decoration}
			<img
				id={decoration.toString()}
				alt="decoration"
				draggable="true"
				ondragstart={dragstartHandler}
				src="https://advent.sveltesociety.dev/data/2023/day-twelve/{decoration}.png "
			/>
		{/each}
	</div>

	<div
		id="target"
		ondrop={dropHandler}
		ondragover={dragoverHandler}
		class="h-96"
	>
		DND here to start creating the christmas card
	</div>
</div>
