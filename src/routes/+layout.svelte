<script lang="ts">
    import Header from "./Header.svelte";
    import "../app.css"
</script>

<svelte:head>
    <link rel="stylesheet" href="/src/fonts.css" />
</svelte:head>

<div class="layout">
    <Header />

    <main>
        <slot />
    </main>
</div>