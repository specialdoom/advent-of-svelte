<script lang="ts">
	// Set the date we're counting down to
	const countDownDate = new Date('Dec 25, 2023 00:00').getTime();

	let days = $state();
	let hours = $state();
	let minutes = $state();
	let seconds = $state();

	// Update the count down every 1 second
	var x = setInterval(function () {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
		}
	}, 1000);
</script>

{#if minutes !== undefined}
	<div
		class="w-28 flex rounded backdrop-blur-sm bg-white/30 col-span-1 px-2 py-2 h-9 items-center gap-2 text-1xl"
	>
		{days}d {hours}h {minutes}m {seconds}s
	</div>
{/if}
