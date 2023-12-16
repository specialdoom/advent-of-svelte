<script lang="ts">
	import Button from '$lib/shared/components/button/Button.svelte';
	import LegendIndicator from '$lib/shared/components/legend-indicator/LegendIndicator.svelte';

	const morseMapper: Record<string, string> = {
		a: '.-',
		b: '-...',
		c: '-.-.',
		d: '-..',
		e: '.',
		f: '..-.',
		g: '--.',
		h: '....',
		i: '..',
		j: '.---',
		k: '-.-',
		l: '.-..',
		m: '--',
		n: '-.',
		o: '---',
		p: '.--.',
		q: '--.-',
		r: '.-.',
		s: '...',
		t: '-',
		u: '..-',
		v: '...-',
		w: '.--',
		x: '-..-',
		y: '-.--',
		z: '--..',
		'1': '.----',
		'2': '..---',
		'3': '...--',
		'4': '....-',
		'5': '.....',
		'6': '-....',
		'7': '--...',
		'8': '---..',
		'9': '----.',
		'0': '-----',
		' ': '/'
	};

	function codeMessage(message: string) {
		return message.split('').reduce((acc, curr) => {
			acc += morseMapper[curr.toLowerCase()];
			acc += ' ';

			return acc;
		}, '');
	}

	function onButtonClick() {
		coddedMessage = codeMessage(value);
	}

	let value = '';
	let coddedMessage = '';
</script>

<LegendIndicator label="Part of day 7" />

<div class="w-full flex h-10">
	<input
		type="text"
		class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
		placeholder="This is placeholder"
	/>

	<Button onclick={onButtonClick}>Code message</Button>
</div>

{coddedMessage}
