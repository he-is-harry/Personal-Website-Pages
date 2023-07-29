<script lang="ts">
    import { onMount } from "svelte";
    import Youtube from "$lib/components/Youtube.svelte";
    import SkillBar from "$lib/components/SkillBar.svelte";
    import Terminal from "$lib/components/Terminal.svelte";

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

    <h2 class="languages-header">A professional problem solver experienced in 7+ languages</h2>
    <SkillBar />

    <div class="expanded-skills-block">
        <Terminal />
    </div>

    <div class="teaching-container">
        <Youtube videoId="ghZ83DrP85g"/>
        <div class="teaching-description">
            <h1>Skill Focus: Teaching</h1>
        </div>
    </div>
</section>


<style>
    section {
        margin-inline: var(--size-6);
    }

    .section-header {
        text-align: center;
    }

    .break-line {
        margin-inline: auto;
        background-image: linear-gradient(to left, var(--dark-1), var(--surface-3));
        border-radius: 9999px;
        width: var(--size-12);
        height: var(--size-1);
        margin-bottom: var(--size-6);
    }

    .languages-header {
        text-align: center;
        margin-bottom: 0;
    }

    /* Skills Block */
    .expanded-skills-block {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-auto-columns: max-content;
        display: grid;
        padding-inline: var(--size-4);
        /* Center the block */
        margin-inline: auto;
    }

    @media (min-width: 768px) {
        .expanded-skills-block {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .teaching-container {
        display: flex;
        justify-content: space-between;
    }

    .teaching-description {
        text-align: right;
    }
</style>
