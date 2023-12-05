<script lang="ts">
	import Moon from '$lib/shared/icons/Moon.svelte';
	import Sun from '$lib/shared/icons/Sun.svelte';
	import IconButton from '../button/IconButton.svelte';
</script>

<IconButton data-hs-theme-click-value="light" className="hs-dark-mode-active:block hidden">
	<Sun />
</IconButton>
<IconButton data-hs-theme-click-value="dark" className="hs-dark-mode-active:hidden block">
	<Moon />
</IconButton>
