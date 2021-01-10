<script>
    export let iconClass = "";
    export let title = "";
    export let description = "";
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div > i {
        font-size: 64px;
    }
    div > p {
        align-self: flex-start;
    }
</style>

<div>
    <i class={`bi ${iconClass}`} />
    <h3>{title}</h3>
    <p>{description}</p>
</div>
