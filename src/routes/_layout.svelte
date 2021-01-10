<script lang="ts">
	import Footer from "../components/Footer.svelte";
	import InfoHeader from "../components/InfoHeader.svelte";
	import Nav from "../components/Nav.svelte";

	export let segment: string;
</script>

<style>
	main {
		min-height: 70vh;
	}
</style>

<InfoHeader />
<Nav {segment} />
<main>
	<slot />
</main>
<Footer />
