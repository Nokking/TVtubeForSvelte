<script lang="ts">
    import SearchBar from "../components/SearchBar.svelte";

    let q = 'Javascript'
</script>


<form>
    <SearchBar value={q} />
</form>

<div class="text-center mt-4">
    { q }
</div>