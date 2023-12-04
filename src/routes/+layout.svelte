<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	afterNavigate(() => {
		// @ts-ignore: it's present
		HSStaticMethods.autoInit();
	});
</script>

<div class="w-full h-screen dark:bg-slate-900">
	<Header title="Santa's dashboard" />
	<Sidebar title="Santa's dashboard" />
	<div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
		<header>
			<div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 w-full">
				<slot />
			</div>
		</header>
	</div>
</div>
