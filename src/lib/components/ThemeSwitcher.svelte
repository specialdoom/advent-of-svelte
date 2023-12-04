<script lang="ts">
	import Sun from "$lib/icons/Sun.svelte";
	import Moon from "$lib/icons/Moon.svelte";
</script>

<button
	type="button"
	class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
	data-hs-theme-click-value="dark"
>
	<Sun />
</button>
<button
	type="button"
	class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
	data-hs-theme-click-value="light"
>
	<Moon />
</button>
