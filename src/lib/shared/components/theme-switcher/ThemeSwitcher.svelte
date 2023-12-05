<script lang="ts">
	import IconButton from '../button/IconButton.svelte';
</script>

<IconButton data-hs-theme-click-value="light" className="hs-dark-mode-active:block hidden">
	☀️
</IconButton>
<IconButton data-hs-theme-click-value="dark" className="hs-dark-mode-active:hidden block">
	🌙
</IconButton>
