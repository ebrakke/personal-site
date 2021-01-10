<script lang="ts">
	export let segment: string;

	let pages = [
		{ link: "about", display: "About" },
		{ link: "contact", display: "Contact" },
	];
</script>

<style>
	nav {
		padding: 16px 0;
	}
</style>

<nav class="navbar navbar-light navbar-expand-lg bg-light">
	<div class="container-fluid">
		<a href="." class="navbar-brand">Erik Brakke Web Design</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarLinks"
			aria-controls="navbarLinks"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarLinks">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each pages as page}
					<li class="nav-item">
						<a
							class="nav-link"
							class:active={segment === page.link}
							aria-current={segment === page.link ? 'page' : undefined}
							href={page.link}>{page.display}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
