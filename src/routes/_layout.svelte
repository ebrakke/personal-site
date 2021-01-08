<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	main {
		margin-top: 16px;
		padding: 24px;
		background-color: hsl(190, 77%, 98%);
		height: 100vh;
	}
</style>

<Nav {segment}/>

<main class="container is-fluid">
	<slot></slot>
</main>