<script context="module">
    export async function preload() {
        const res = await this.fetch('notes.json')
        const notes = await res.json()

        return {notes}
    }
</script>
<script lang="ts">
    export let notes: any[];
</script>

<style>
    .notes {
        display: flex;
        flex-direction: column;
    }
</style>
<div>
    <h2>Notes</h2>
    <div class="notes">
        {#each notes as note}
            <a href={`notes/${note.path}`}>{note.display}</a>
        {/each}
    </div>
</div>