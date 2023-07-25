<script lang="ts">
    import { onMount } from "svelte";
    import Youtube from "$lib/components/Youtube.svelte";
    import SkillBar from "$lib/components/SkillBar.svelte";

    let playerWidth: string, playerHeight: string;

    onMount(() => {
        function getWidth() {
            return Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.documentElement.clientWidth
            );
        }

        playerWidth = "240px";
        playerHeight = "135px";
        if(getWidth() >= 1024) {
            playerWidth = "720px";
            playerHeight = "405px";
        } else if(getWidth() >= 480) {
            playerWidth = "448px";
            playerHeight = "252px";
        }

        window.dispatchEvent(new CustomEvent("YoutubePlayerSizeReady", {"detail": {"width":playerWidth, "height":playerHeight}}));
    });
</script>

<section id="Skills">
    <h1 class="section-header">Skills</h1>
    <div class="break-line"></div>

    <SkillBar />

    <div class="teaching-container">
        <Youtube videoId="ghZ83DrP85g"/>
        <div class="teaching-description">
            <h1>Focus: Teaching</h1>
        </div>
    </div>
</section>


<style>
    section {
        margin-inline: var(--size-6);
    }

    .section-header {
        text-align: right;
    }

    .break-line {
        margin-left: auto;
        margin-right: 0;
        background-image: linear-gradient(to left, var(--dark-1), var(--surface-2));
        border-radius: 9999px;
        width: var(--size-12);
        height: var(--size-1);
    }

    .teaching-container {
        display: flex;
        justify-content: space-between;
    }

    .teaching-description {
        text-align: right;
    }
</style>
