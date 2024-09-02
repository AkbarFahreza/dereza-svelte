<script>
	import MenuButton from './ui/MenuButton.svelte';
	const MenuList = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'Contact', link: '/contact' }
	];
</script>

<section class="flex items-center justify-between py-4">
	<div>
		<h1
			class="bg-gradient-to-r from-secondary to-tertiary bg-clip-text pr-3 text-2xl font-bold text-transparent md:text-3xl"
		>
			DEREZA
		</h1>
	</div>
	<div class="hidden items-center gap-5 font-semibold md:flex">
		{#each MenuList as item}
			{#if item.name == 'Contact'}
				<a
					class="rounded-md bg-secondary px-3 py-2 text-white shadow-CTA-shadow transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[3px] hover:bg-tertiary hover:shadow-none"
					href={item.link}>{item.name}</a
				>
			{:else}
				<a class="" href={item.link}>{item.name}</a>
			{/if}
		{/each}
	</div>
	<MenuButton {MenuList} />
</section>
