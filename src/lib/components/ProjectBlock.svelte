<script lang="ts">
    import type { TagType } from "$lib/types";
    import Tag from "./Tag.svelte";

    export let projectLink: string;
    export let imgSrc: string;
    export let title: string;
    export let description: string;
    export let tags: TagType[];
</script>

<article class="project-block">
    <a href={projectLink} class="no-underline">
        <!-- Put a container so that the container query units can be used -->
        <div style="container-type: inline-size; width: 100%; height: auto;">
            <img class="project-image" src={imgSrc} alt={title}/>
        </div>
        <section class="project-info">
            <h5 class="project-title">{title}</h5>
            <p class="project-description">{description}</p>

            {#each tags as tagType}
                <Tag type={tagType}/>
            {/each}
        </section>
    </a>
</article>

<style>
    .project-block {
        /* Use between --size-14 and --size-15 */
        max-width: 24rem;
        overflow: hidden;
        /* --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow); */
        box-shadow: var(--shadow-5);
        background-color: var(--surface-5);
        border-radius: var(--size-2-5);
        margin-inline: auto;

        transition-property: transform;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    .project-block:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    .no-underline {
        text-decoration-line: none;
    }

    .project-image {
        border-top-left-radius: var(--size-2-5);
        border-top-right-radius: var(--size-2-5);
        width: 100%;
        max-width: 100%;
        height: calc(100cqw * 0.5625);
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    .project-info {
        padding: var(--size-4);
    }

    .project-title {
        font-family: var(--font-sans-def);
        font-style: normal;
        display: block;
        font-weight: var(--font-weight-8);
        font-size: var(--font-size-3);
        margin: 0;
        padding-block: var(--size-2);
        color: var(--surface-1);
    }

    .project-description {
        /* Use min-height between --size-10 and --size-11 */
        min-height: 6rem;
        margin-top: var(--size-2-5);
        margin-bottom: var(--size-2-5);
        color: var(--surface-3);
        font-weight: var(--font-weight-5);
        /* Make font size between --font-size-0 and --font-size-1 */
        font-size: 0.9rem;
        letter-spacing: 0.6px;
        line-height: 170%;
    }
</style>