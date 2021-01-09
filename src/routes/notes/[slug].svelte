<script context="module">
    export async function preload({params}) {
        const { slug } = params

        const res = await this.fetch(`notes/${slug}.md`)

        if (res.status === 404) {
            this.error(404, "Note not found")
            return
        }
        const note = await res.text()
        return {note}
    }
</script>

<script>
    export let note;
</script>

<div>
    {@html note}
</div>