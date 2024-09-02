<script>
	const SocilaList = [
		{ name: 'instagram', link: 'https://instagram.com' },
		{ name: 'twitter', link: 'https://twitter.com' },
		{ name: 'linkedin', link: 'https://linkedin.com' },
		{ name: 'github', link: 'https://github.com' },
		{ name: 'Trakteer', link: 'https://traktee.id' }
	];
</script>

<section class="relative w-full px-4 py-3">
	<div class="absolute-center absolute -z-10 h-full w-[100vw] bg-clear"></div>
	<div class="flex flex-wrap justify-center gap-4 md:gap-7">
		{#each SocilaList as item}
			<a
				class="font-semibold text-semidark transition-all duration-150 hover:text-main"
				href={item.link}>{item.name}</a
			>
		{/each}
	</div>
</section>
