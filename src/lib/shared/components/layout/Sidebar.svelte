<script lang="ts">
	import BpmCounter from '../bpm-counter/BPMCounter.svelte';

	type Props = {
		title: string;
	};

	let { title } = $props<Props>();
</script>

<div
	class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700"
>
	<div class="flex items-center py-4">
		<button
			type="button"
			class="text-gray-500 hover:text-gray-600"
			data-hs-overlay="#application-sidebar"
			aria-controls="application-sidebar"
			aria-label="Toggle navigation"
		>
			<span class="sr-only">Toggle Navigation</span>
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
				><line x1="3" x2="21" y1="6" y2="6" /><line
					x1="3"
					x2="21"
					y1="12"
					y2="12"
				/><line x1="3" x2="21" y1="18" y2="18" /></svg
			>
		</button>
	</div>
</div>

<div
	id="application-sidebar"
	class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-4 pb-4 overflow-y-auto lg:flex lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700 flex flex-col"
>
	<div class="px-6">
		<a
			class="flex items-center gap-1 text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
			href="/"
			aria-label={title}
		>
			<img class="w-5 h-auto" src="santa-svelte.png" alt="..." />
			{title}
		</a>
		<p
			class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500"
		>
			by specialdoom
		</p>
	</div>

	<nav
		class="hs-accordion-group p-6 pb-0 w-full flex flex-col flex-wrap justify-between flex-auto flex"
		data-hs-accordion-always-open
	>
		<ul class="space-y-1.5">
			<li>
				<a
					class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					href="/"
				>
					🎁 Children
				</a>
			</li>
			<li>
				<a
					class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					href="/slb"
				>
					🛷 Sleigh
				</a>
			</li>
			<li>
				<a
					class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					href="/presents"
				>
					📦 Present Progress
				</a>
			</li>
			<li>
				<a
					class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					href="/game"
				>
					🃏 Card match
				</a>
			</li>
		</ul>
		
		<BpmCounter />
	</nav>
</div>
