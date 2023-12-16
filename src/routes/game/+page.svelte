<script lang="ts">
	const c = 8;
	const cardsNumber = [...new Array(c).keys()]
		.map((x) => ({
			value: x >= c / 2 ? (x % (c / 2)) + 1 : x + 1,
			id: Math.random(),
			flipped: false
		}))
		.sort((a, b) => a.id - b.id);

	let flipped: any[] = $state([]);
	let correct: any[] = $state([]);
	let cards = $state(cardsNumber);
	let cardss = $derived(
		cards.map((x) => ({
			...x,
			flipped: correct.includes(x.value) || flipped.some((y) => y.id === x.id)
		}))
	);
	let clicked = 0;

	$effect(() => {
		if (flipped.length > 2) {
			flipped = [clicked];
		}

		if (flipped.length === 2) {
			const [first, second] = flipped;

			if (first.value === second.value) {
				correct.push(first.value);
				flipped = [];
			}
		}

		if (correct.length === c / 2) {
			console.log('win');
		}
	});

	function onButtonClick(cardId: any) {
		flipped.push(cardId);
		clicked = cardId;
	}
</script>

<div class="grid gap-x-8 gap-y-4 grid-cols-8">
	{#each cardss as card (card.id)}
		<div>
			{#if card.flipped}
				<img
					alt="card"
					class="h-24 w-16"
					src="https://advent.sveltesociety.dev/data/2023/day-eight/{card.value}.png"
				/>
			{:else}
				<button
					onclick={() => onButtonClick(card)}
					class="h-24 w-16 rounded bg-gray-600 flex items-center justify-center"
				>
					{card.value}
				</button>
			{/if}
		</div>
	{/each}
</div>
