<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>About - Harry He</title>
</svelte:head>

<div class="block-1">
    <h1 style="line-height: 50%">About Harry</h1>
    <h2>Harry has been creating code for 7 years.</h2>
    <br />
    <p>
        Ever since learning Swift with Apple in Swift Playgrounds in 2017, Harry
        has envisioned, launched, and built a number of projects. He's a full
        stack developer, game designer, and teacher. In 2018, Harry started
        studying competitive programming by learning Java and preparing for the
        Canadian Computing Compeition. From there, he started learning
        algorithms and data structures and picked up two other languages, Python
        and C++, all the way throughout middle school and highschool going all
        the way up to learning advanced topics such as persistent data
        structures and CDQ divide and conquer.
    </p>

    <p>
        In 2020, Harry developed a replica of Wii Sports Tennis which earned him
        a mark of 100% in his grade 10 computer science course. Later on, in
        2021 and 2022, he continued developing games creating his own random
        terrain generation technique and pixel art methodology. At the same
        time, Harry became interested in a field which he continues to study:
        Artificial Intelligence. He created his own Chess AI, a doodle
        classifier, and a neuroevolution flappy bird game to advance his
        knowledge into machine learning and its applications.
    </p>
</div>

<div class="images" style="background-color: var(--surface-2); width: 100%;">
    <div class="image-band">
        <!-- Render in all of the images in the image band -->
        {#each { length: 4 } as _, i}
            <img
                src="{base}/static/About{i + 1}.png"
                alt="Project Images"
                class="banded-image"
            />
        {/each}
    </div>
    
    <div class="caption-background" >
        <div class="image-captions">
            <p class="caption">1: A bipartite graph illustrating augmenting paths. Apart of a presentation on Bipartite Matching by Harry, a 3rd year CS topic.</p>
            <p class="caption">2: Harry's Wii Sports Tennis game coded in python.</p>
            <p class="caption">3: A randomly generated golf map with unfiltered RGB values.</p>
            <p class="caption">4: Flappy birds training in a genetic algorithm neuroevolution. For more information on the meaning of the bird colors see the <a href="https://github.com/he-is-harry/Neuroevolution-Flappy-Bird">project page</a>.</p>
        </div>
    </div>
</div>

<div class="block-2">
    <p>
        Harry is continuing his journey by going on to study Computer Science at
        the University of Waterloo. He continues to broaden his understanding of
        computer science by studying front end development and networking. For example,
        this website built in 2023 is one of Harry's projects, where the site is
        coded in SvelteKit. Harry's hobbies include learning about quantum
        chromodynamics and running with his family.
    </p>
</div>

<style>
    .block-1, .block-2, .image-captions {
        margin-inline: 10%;
    }

    .block-1 {
        padding-top: var(--size-3);
    }

    .block-2 {
        padding-bottom: var(--size-3);
    }

    p {
        line-height: 150%;
    }

    .image-band {
        display: flex;
        width: 100%;
        padding-top: var(--size-3);
    }

    .image-captions {
        padding-top: var(--size-2);
        padding-bottom: var(--size-3);
    }

    .caption {
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-1);
        margin: 0;
    }

    .banded-image {
        width: 25%;
        height: 25%;
    }
</style>
