<script lang="ts">
	import Sun from '$lib/shared/icons/Sun.svelte';
	import Moon from '$lib/shared/icons/Moon.svelte';
	import IconButton from '../button/IconButton.svelte';
</script>

<IconButton
	data-hs-theme-click-value="light"
	className="hs-dark-mode-active:block hidden"
	icon={Sun}
/>
<IconButton
	data-hs-theme-click-value="dark"
	className="hs-dark-mode-active:hidden block"
	icon={Moon}
/>
