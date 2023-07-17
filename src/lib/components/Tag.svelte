<script lang="ts">
    import { TagType } from "$lib/types";

    export let type: TagType;
    let tag: string = "unknown-tag";
    let background: string = "var(--dark-2)";
    let textColor: string = "var(--surface-3)";

    if (type == TagType.Svelte) {
        tag = "#svelte";
        background = "#ff3e00";
        textColor = "#ffffff";
    } else if (type == TagType.Typescript) {
        tag = "#typescript";
        background = "#2775c3";
        textColor = "#ffffff";
    } else if (type == TagType.CSS) {
        tag = "#css";
        background = "#f954be";
        textColor = "#313244";
    } else if (type == TagType.Node) {
        tag = "#node";
        background = "#8dba55";
        textColor = "#46483d";
    } else if (type == TagType.Python) {
        tag = "#python";
        background = "#3879ab";
        textColor = "#ffda5d";
    } else if (type == TagType.Java) {
        tag = "#java";
        background = "#ff9e29";
        textColor = "#2e71a3";
    } else if (type == TagType.CPP) {
        tag = "#c++";
        background = "#709ace";
        textColor = "#ffffff";
    } else if (type == TagType.ML) {
        tag = "#ml";
        // Use custom metal background
        textColor = "#000000";
    } else if (type == TagType.ProceduralGeneration) {
        tag = "#proc-gen";
    } else if (type == TagType.Game) {
        tag = "#game";
        background = "#000000";
        // Use custom multicolors
    } else if (type == TagType.AI) {
        tag = "#ai";
        background = "#d68f91";
        textColor = "#000000";
    } else if (type == TagType.Neuroevolution) {
        tag = "#neuroevolution";
    } else if (type == TagType.PixelArt) {
        tag = "#pixel-art";
    } else if (type == TagType.Backpropagation) {
        tag = "#backpropagation";
    } else if (type == TagType.Template) {
        tag = "#template";
        background = "#bb9b72";
        textColor = "#000000";
    } else if (type == TagType.Algorithms) {
        tag = "#algorithms";
    }
</script>

{#if type == TagType.Game}
    <span class="tag" style="background-color:{background};">
        <p class="gradient-text tag-text" style="margin: 0;">#game</p>
    </span >
{:else if type == TagType.ML}
    <span class="tag tag-text metal-gradient" style="color:{textColor};"
    >{tag}</span
    >
{:else}
    <!-- Default coloring -->
    <span class="tag tag-text" style="color:{textColor}; background-color:{background};"
        >{tag}</span
    >
{/if}

<style>
    /* Styles used from Fireship.io */
    .tag {
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
        display: inline-block;
        border-radius: 0.375rem;
        border-style: none;
        padding: 0.25rem 0.5rem 0.375rem;
    }

    .tag-text {
        line-height: 1rem;
        font-family: var(--font-sans-def);
        font-style: normal;
        font-weight: var(--font-weight-5);
        font-size: 0.75rem;
        /* letter-spacing: 0.5px; */
    }

    .gradient-text {
        background: linear-gradient(to right, #be19fa,
        #49a5e2, #9cf470, #fdec50, #ff179e);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }

    .metal-gradient {
        background: linear-gradient(to right, #5d5f60,
        #d0d2d3 40%, #696a6c 100%);
    }
</style>
