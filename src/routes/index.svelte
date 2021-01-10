<script context="module">
	export async function preload() {
		const res = await this.fetch("index.json");
		if (res.status === 200) {
			const { services, features } = await res.json();
			return { services, features };
		}
		return { services: [] };
	}
</script>

<script>
	import Button from "../components/Button.svelte";
	import Feature from "../components/Feature.svelte";

	import ServiceCard from "../components/ServiceCard.svelte";
	export let services = [];
	export let features = [];
</script>

<style>
	section {
		margin-bottom: 32px;
	}
	.hero {
		background-color: hsl(190, 18%, 32%);
		color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}
</style>

<svelte:head>
	<title>Erik Brakke Web Design</title>
</svelte:head>

<section>
	<div class="container-fluid hero">
		<img
			class="col-10 col-md-8 col-lg-5 col-xl-4 my-5"
			src="landing-page-windows.svg"
			alt="Computer Screens" />
		<h2>Custom websites for small businesses at affordable prices</h2>
		<p>Prices start at just $200 bucks a month</p>
	</div>
</section>
<section>
	<div class="container-fluid row">
		{#each features as feature}
			<div class="col-12 col-lg-4">
				<Feature {...feature} />
			</div>
		{/each}
	</div>
</section>
<section>
	<div class="container-fluid">
		<h3 class="mb-4">Services</h3>
		<div class="row">
			{#each services as service}
				<div class="col-12 col-lg-4">
					<ServiceCard {...service} />
				</div>
			{/each}
		</div>
	</div>
</section>
