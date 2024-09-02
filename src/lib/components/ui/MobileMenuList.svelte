<script>
	import { fly } from 'svelte/transition';
	export let isMenuOpen;
	export let MenuList;
</script>

{#if isMenuOpen}
	<div
		class="absolute right-0 top-10 flex flex-col gap-3 rounded-md bg-white px-2 py-3"
		transition:fly={{ x: 200, duration: 300 }}
	>
		{#each MenuList as item}
			<a class="navListSM" href={item.link}>{item.name}</a>
		{/each}
	</div>
{/if}
