<script>
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import '../app.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
</script>

<div class="app">
	<main class="">
		<Navbar />
		<slot></slot>
	</main>
</div>
