<script lang="ts">
    import Header from "./Header.svelte";
    import "../app.css"
    import Footer from "./Footer.svelte";
    
    // import { base } from "$app/paths";
</script>

<!-- <svelte:head>
    <link rel="stylesheet" href="{base}/src/fonts.css" />
</svelte:head> -->

<div class="layout">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>