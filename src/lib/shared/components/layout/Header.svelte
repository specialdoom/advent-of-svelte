<script lang="ts">
	import Magnifier from '$lib/shared/icons/Magnifier.svelte';
	import ThemeSwitcher from '../theme-switcher/ThemeSwitcher.svelte';
	import Tooltip from '$lib/shared/components/tooltip/Tooltip.svelte';
	import GitHub from '$lib/shared/icons/GitHub.svelte';
	import Beat from '../heart/Beat.svelte';
	import SantaTimer from '../santa-timer/SantaTimer.svelte';

	type Props = {
		title: string;
	};

	let { title } = $props<Props>();
</script>

<header
	class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700"
>
	<nav
		class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
		aria-label="Global"
	>
		<div class="me-5 lg:me-0 lg:hidden">
			<a
				class="flex-none text-xl font-semibold dark:text-white"
				href="/"
				aria-label={title}
			>
				{title}
			</a>
		</div>
		<div
			class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3"
		>
			<div class="sm:hidden">
				<button
					type="button"
					class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
				>
					<svg
						class="flex-shrink-0 w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
					>
				</button>
			</div>

			<div class="hidden sm:block">
				<label for="icon" class="sr-only">Search</label>
				<div class="relative">
					<div
						class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
					>
						<Magnifier />
					</div>
					<input
						type="text"
						id="icon"
						name="icon"
						class="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
						placeholder="Search"
					/>
				</div>
			</div>
			<div class="flex flex-row items-center justify-end gap-4">
				<SantaTimer />
				<Beat />
				<Tooltip label="Github">
					<a href="https://github.com/specialdoom/advent-of-svelte">
						<GitHub />
					</a>
				</Tooltip>
				<ThemeSwitcher />
			</div>
		</div>
	</nav>
</header>
