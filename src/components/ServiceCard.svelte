<script lang="ts">
    export let service: string;
    export let price: string;
    export let description: string;
    export let features: string[];
</script>

<style>
    .card {
        min-height: 450px;
        margin-bottom: 24px;
    }
</style>

<div class="card p-4 mx-4">
    <div class="text-center p-4">
        <h3>{service}</h3>
        <i>{price}</i>
    </div>
    <p>{description}</p>
    <h5>What you get</h5>
    <ul>
        {#each features as feature}
            <li>{feature}</li>
        {/each}
    </ul>
</div>
