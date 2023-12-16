<script lang="ts">
	let open = $state(true);
</script>

{#if open}
	<div class="fixed bottom-0 end-0 z-[60] sm:max-w-sm w-full mx-auto p-6">
		<div
			class="p-4 bg-gradient-to-br from-violet-700 to-sky-500 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
		>
			<p class="mt-2 text-sm text-white">
				Have a wonderful and festive christmas! (Part of day 10)
			</p>
			<div class="mt-5 flex justify-between gap-x-2">
				<button
					type="button"
					class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					onclick={() => (open = false)}
				>
					Dismiss
				</button>
			</div>
		</div>
	</div>
{/if}
