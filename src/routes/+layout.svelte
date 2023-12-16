<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import Header from '$lib/shared/components/layout/Header.svelte';
	import Sidebar from '$lib/shared/components/layout/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { snow } from '$lib/client/services';
	import FestivePopup from '$lib/shared/components/popup/FestivePopup.svelte';

	onMount(() => {
		snow.start();
	});

	afterNavigate(() => {
		// @ts-ignore: it's present
		HSStaticMethods.autoInit();
	});
</script>

<div
	class="w-full min-h-screen dark:bg-slate-900 text-gray-800 dark:text-gray-200"
>
	<FestivePopup />
	<Header title="Santa's dashboard" />
	<Sidebar title="Santa's dashboard" />
	<div class="w-full min-h-full pt-4 pb-7 px-4 sm:px-6 md:px-8 lg:ps-72">
		<slot />
	</div>
</div>
