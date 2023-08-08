<script lang="ts">
    // Imports
    import { onMount } from "svelte";
    import Projects from "./projects.svelte";
    import Skills from "./skills.svelte";
    import { base } from '$app/paths';

    let imageHoriPos = "0";
    let imageVertPos = "5%";
    let imageWidth = "100%";
    let imageHeight = "90%";
    let magnification = 1.5;

    // Universal Carousel Variables
    let index: number = 0;
    const numStates: number = 3; // Total number of indices that are possible
    const delay: number = 5000; // 5s
    let interval: number;
    const incrementIndex = () => {
        if (index < numStates - 1) {
            index++;
            if (index == 2) {
                // For typing out the name
                startTyping();
            }
        } else {
            index = 0;
        }
    };
    onMount(() => {
        interval = setInterval(incrementIndex, delay);
    });

    // Image Carousel
    const carouselPhotos = [
        base + "/static/carousel/HarryPosing.JPG",
        base + "/static/carousel/HarryTeaching.png",
        base + "/static/carousel/HarryCoding.JPG",
    ];

    // Name Carousel
    const name: string = "Harry";

    let typeInterval: number;
    const typeDelay: number = 150;
    let typedName: string = "";
    let typeIndex = 0;
    function startTyping() {
        typeIndex = 0;
        typedName = "";
        typeInterval = setInterval(() => {
            if (typeIndex < name.length) {
                typedName += name[typeIndex];
                typeIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, typeDelay);
    }

    // Reset Animation Methods
    function reset_document_animation(id: string) {
        var el = document.getElementById("image-" + index);
        if (el == null) {
            throw new Error("Null Document");
        } else {
            el.style.animation = "none";
            el.offsetHeight; /* trigger reflow */
            el.style.animation = "";
        }
    }

    function reset_interval() {
        clearInterval(interval);
        interval = setInterval(incrementIndex, delay);
    }

    function reset_animation() {
        // Reanimate Image
        reset_document_animation("image-" + index);
        // Reanimate Text
        if (index == 0) {
            reset_document_animation("classic-name");
        } else if (index == 1) {
            reset_document_animation("h-letter");
            reset_document_animation("a-letter");
            reset_document_animation("r1-letter");
            reset_document_animation("r2-letter");
            reset_document_animation("y-letter");
        } else if (index == 2) {
            startTyping();
        }

        // Reset Interval
        reset_interval();
    }

    // Alter Index Methods
    const next = () => {
        index = (index + 1) % numStates;
        if (index == 2) {
            startTyping();
        }
        reset_interval();
    };

    const prev = () => {
        index = (index - 1 + numStates) % numStates;
        if (index == 2) {
            startTyping();
        }
        reset_interval();
    };

    const jumpTo = (newIndex: number) => {
        index = newIndex;
        if (index == 2) {
            startTyping();
        }
        reset_interval();
    };
</script>

<svelte:head>
    <title>Harry He</title>
</svelte:head>

<div class="block-1">
    <!-- Draw in Image Carousel -->
    <div class="carousel-container">
        <div
            class="image-carousel"
            style="container-type: size; width: {imageWidth}; height: {imageHeight}; left: {imageHoriPos}; top: {imageVertPos};"
        >
            {#each [carouselPhotos[index]] as src (index)}
                <img
                    {src}
                    alt="Images of Harry"
                    class="slideshow-image"
                    id="image-{index}"
                />
            {/each}

            <!-- The width and height of the arrow buttons are --size-3 which is 1rem -->
            <button class="arrow-left" on:click={prev}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-left"
                    ><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg
                >
            </button>

            <button class="arrow-right" on:click={next}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right"
                    ><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
                >
            </button>

            <div class="slideshow-buttons">
                <!-- Loop each button for the number of states, 3 times -->
                {#each { length: numStates } as _, i}
                    {#if i == index}
                        <button
                            style="opacity: 1"
                            class="slideshow-button"
                            on:click={reset_animation}
                        />
                    {:else}
                        <button
                            style="opacity: 0.35"
                            class="slideshow-button"
                            on:click={() => jumpTo(i)}
                        />
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <div class="text-column">
        <div class="animated-header">
            <h1>Hello, I'm  </h1>

            <!-- Draw in Name Carousel -->
            {#if index == 0}
                <!-- Classic Name -->
                <h1 class="classic" id="classic-name" style="font-size: calc(2rem * {magnification});">
                    {name}
                </h1>
            {:else if index == 1}
                <!-- Hand-drawn Name -->
                <svg
                    width={magnification * 120}
                    height={magnification * 54}
                    viewBox="0 21 120 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- <rect width="{width}" height="{height}" fill="#F5F5F5" /> -->
                    <g id="signature">
                        <!-- <rect width="{width}" height="{height}" fill="white" /> -->
                        <g id="letters">
                            <path
                                id="h-letter"
                                style="--order: 1"
                                d="M7.38029 24.9542C7.38029 36.0598 7.38029 47.1654 7.38029 58.271C7.38029 60.5181 7.88981 62.739 7.88981 64.9514C7.88981 66.9517 7.88981 60.9507 7.88981 58.9504C7.88981 55.4781 7.88981 52.0059 7.88981 48.5336C7.88981 47.3312 8.17714 45.6748 7.8332 44.514C7.7036 44.0767 7.63505 43.7521 7.63505 43.2969C7.63505 42.5493 8.00021 42.9797 8.55502 43.028C11.9459 43.3228 15.2258 42.3726 18.5897 42.2778C19.9908 42.2384 21.9133 42.1299 22.9206 41.004C24.106 39.6792 24.1087 36.3716 24.1802 34.7624C24.3468 31.0142 24.7039 27.3056 24.7039 23.553C24.7039 20.5714 24.7039 29.5163 24.7039 32.4979C24.7039 40.0912 23.6849 47.6307 23.6849 55.2139C23.6849 57.4028 23.4301 59.5596 23.4301 61.7527C23.4301 62.5941 23.6849 63.3884 23.6849 64.1871"
                                stroke="black"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                            <path
                                id="a-letter"
                                style="--order: 2"
                                d="M36.6776 51.7039C33.2698 51.7039 30.9682 53.5056 28.7234 55.8367C27.7602 56.8369 26.8419 58.8587 27.3081 60.3091C27.9912 62.4342 31.1174 62.2085 32.5448 61.13C34.508 59.6467 36.0037 57.6809 36.7342 55.3272C37.0721 54.2383 36.9449 52.9495 37.3852 51.9587C37.7229 51.199 37.8174 51.6565 38.3194 52.27C39.725 53.988 41.3529 55.4968 42.7352 57.252C43.91 58.7439 45.7248 61.5132 47.6322 62.149"
                                stroke="black"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                            <path
                                id="r1-letter"
                                style="--order: 3"
                                d="M52.4726 62.4038C52.4726 59.8339 52.3572 57.299 52.232 54.7327C52.1624 53.3052 51.6693 50.4413 53.4917 49.9206C56.5929 49.0345 59.7827 49.6658 62.9178 49.6658"
                                stroke="black"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                            <path
                                id="r2-letter"
                                style="--order: 4"
                                d="M69.032 62.9133C69.032 59.6864 69.032 56.4594 69.032 53.2325C69.032 52.0611 68.3964 49.1563 70.051 49.1563C72.2967 49.1563 74.5423 49.1563 76.788 49.1563C77.3875 49.1563 79.4491 48.8455 79.7319 49.4111"
                                stroke="black"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                            <path
                                id="y-letter"
                                style="--order: 5"
                                d="M85.5913 45.5897C85.7616 47.2922 87.424 49.6931 88.2804 51.1095C89.1933 52.6192 90.951 53.1387 92.6538 52.6522C95.7579 51.7653 96.843 48.4843 98.3151 46.0001C98.6621 45.4147 99.6852 42.4693 100.311 42.3911C100.329 42.3887 99.8855 43.288 99.8578 43.3535C99.4345 44.3561 98.8663 45.2409 98.3859 46.2124C96.4603 50.1064 95.0688 54.2877 93.2199 58.2286C91.5058 61.8824 89.2738 65.4105 88.0257 69.2681C87.7204 70.2117 87.1199 71.0997 87.1199 72.0846"
                                stroke="black"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                        </g>
                    </g>
                </svg>
            {:else}
                <!-- Type Name -->
                <h1 class="typed" style="font-size: calc(2.2rem * {magnification});">
                    {typedName}
                </h1>
            {/if}
        </div>

        <p>
            Harry He is studying Computer Science at the University of Waterloo.
            He is a full-stack developer with a passion to learn and teach,
            having taught others unversity level computer science, competitive
            programming, and even English. You can find him on <a
                href="https://github.com/he-is-harry">Github</a
            >,
            <a href="https://ca.linkedin.com/in/harryghe">Linkedin</a
            >, and, if you really want to,
            <a href="mailto:harryhemr@gmail.com">Email</a>.
        </p>
    </div>
</div>

<!-- To make this page a bit less cluttered other blocks are in their own file -->
<Projects />
<Skills />

<style>
    .block-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-auto-columns: max-content;
        display: grid;
        /* height: 30rem; */
        margin-inline: var(--size-6);
    }

    /* At 1024px the image carousel will have proper formatting with the 
    words inline */
    @media (min-width: 1024px) {
        .block-1 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .text-column {
        /* position: absolute; */
        /* left: 50cqw;
        top: 50cqh;
        transform: translateY(-50%); */
        position: relative;
        align-self: center;
        padding-inline: var(--size-7);
    }

    .animated-header {
        display: flex;
        align-items: center;
        gap: var(--size-2);
    }

    p {
        font-size: var(--font-size-4);
    }

    /* Carousel Styling */
    /* Image Carousel */
    .carousel-container {
        height: 30rem;
    }

    .image-carousel {
        position: relative;
        align-items: center;
    }

    .image-carousel * {
        box-sizing: border-box;
    }

    .slideshow-image {
        animation: 1s fadeIn ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .arrow-left, .arrow-right {
        border: none;
        background: #fff;
        opacity: 0.7;
        position: absolute;
        top: 50cqh;
        transform: translate(0%, -50%);
        width: var(--size-7);
        height: var(--size-7);
        border-radius: 50cqh;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .arrow-left:hover, .arrow-right:hover {
        background: #000;
        color: #fff;
    }

    .arrow-left {
        left: var(--size-3);
    }

    .arrow-right {
        right: var(--size-3);
    }

    .slideshow-buttons {
        position: absolute;
        top: 85cqh;
        left: 50cqw;
        transform: translate(-50%, 0%);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--size-5);
        margin-block: 0;
    }

    .slideshow-button {
        display:block;
        width: var(--size-4);
        height: var(--size-4);
        border-radius: 50cqh;
        border: 0;
        background-color: var(--surface-1);
    }

    /* Name Carousel */
    /* Classic Name Style */
    .classic {
        font-family: var(--font-sans-def);
	    font-style: normal;
	    font-weight: var(--font-weight-8);
        /* font-size: var(--font-size-5); */
        animation: 2s fadeInUp ease;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Typed Name Style */
    .typed {
        font-family:'Courier New', Courier, monospace;
        font-style: normal;
	    font-weight: var(--font-weight-8);
        /* font-size: var(--font-size-6); */

        /* The centering doesn't quite exactly work with the typed
        font, so it has to be shifted down slightly. Here it is based
        on the actual text as the shift is constant no matter the
        window size */
        transform: translateY(7%);
        line-height: 90%;
    }

    /* Hand-drawn Name Style */
    #h-letter {
        stroke-dasharray: 138.087158203125;
        stroke-dashoffset: 138.087158203125;
        animation: 450ms drawH forwards;
        animation-delay: 0ms;
    }
    #a-letter {
        stroke-dasharray: 46.09496307373047;
        stroke-dashoffset: 46.09496307373047;
        animation: 400ms drawA forwards;
        animation-delay: 470ms;
    }
    #r1-letter {
        stroke-dasharray: 22.53114128112793;
        stroke-dashoffset: 22.53114128112793;
        animation: 350ms drawR1 forwards;
        animation-delay: 940ms;
    }
    #r2-letter {
        stroke-dasharray: 24.139999389648438;
        stroke-dashoffset: 24.139999389648438;
        animation: 350ms drawR2 forwards;
        animation-delay: 1330ms;
    }
    #y-letter {
        stroke-dasharray: 56.918861389160156;
        stroke-dashoffset: 56.918861389160156;
        animation: 400ms drawY forwards;
        animation-delay: 1700ms;
    }
    
    @keyframes drawH {
        from { stroke-dashoffset: 138.087158203125; }
        to { stroke-dashoffset: 0; }
    }
    @keyframes drawA {
        from { stroke-dashoffset: 46.09496307373047; }
        to { stroke-dashoffset: 0; }
    }
    @keyframes drawR1 {
        from { stroke-dashoffset: 22.53114128112793; }
        to { stroke-dashoffset: 0; }
    }
    @keyframes drawR2 {
        from { stroke-dashoffset: 24.139999389648438; }
        to { stroke-dashoffset: 0; }
    }
    @keyframes drawY {
        from { stroke-dashoffset: 56.918861389160156; }
        to { stroke-dashoffset: 0; }
    }
</style>
