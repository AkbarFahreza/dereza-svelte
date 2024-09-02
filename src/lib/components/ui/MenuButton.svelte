<script>
	import { scale } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { Menu, X } from 'lucide-svelte';
	import MobileMenuList from './MobileMenuList.svelte';
	let isMenuOpen = false;

	function MenuToggle() {
		isMenuOpen = !isMenuOpen;
	}
	export let MenuList;
</script>

<button on:click={MenuToggle} class="relative h-7 w-7 md:hidden">
	<MobileMenuList {isMenuOpen} {MenuList} />
	{#if isMenuOpen}
		<div
			class="absolute-center"
			transition:scale={{ duration: 300, start: 0.5, easing: quintInOut }}
		>
			<X size={34} />
		</div>
	{:else}
		<div
			class="absolute-center"
			transition:scale={{ duration: 300, start: 0.5, easing: quintInOut }}
		>
			<Menu size={34} />
		</div>
	{/if}
</button>
