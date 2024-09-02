<script>
	import { onMount } from 'svelte';
	import character from '$lib/images/character.png';
	let yOffset = 0; // To track the scroll position

	function handleScroll() {
		const scrollPosition = window.scrollY;
		yOffset = scrollPosition * 0.5; // Adjust this multiplier to change the parallax effect
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="relative -z-10 flex h-screen w-full justify-center overflow-hidden">
	<div class="flex origin-bottom scale-75 justify-center md:w-full md:scale-100">
		<img
			alt="hero"
			src={character}
			class="ransition-transform -z-10 max-w-none duration-150 ease-out"
			style="transform: translateY({yOffset}px) translateX(-20px)"
		/>
	</div>
</div>
