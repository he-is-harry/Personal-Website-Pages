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
        if (getWidth() >= 1024) {
            playerWidth = "720px";
            playerHeight = "405px";
        } else if (getWidth() >= 480) {
            playerWidth = "448px";
            playerHeight = "252px";
        }

        window.dispatchEvent(
            new CustomEvent("YoutubePlayerSizeReady", {
                detail: { width: playerWidth, height: playerHeight },
            })
        );
    });
</script>

<section id="Skills">
    <h1 class="section-header">Skills</h1>
    <div class="break-line" />

    <h2 class="languages-header">
        A professional problem solver experienced in 7+ languages
    </h2>
    <SkillBar />

    <div class="expanded-skills-block">
        <Terminal />

        <div class="complete-skill-descriptions">
            <div class="research-skill">
                <!-- Only beyond 1024px should you get text-align left, you should use center otherwise -->
                <div class="icon-wrapper">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 1280.000000 1258.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,1258.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none"
                        >
                            <path
                                d="M8455 12551 c-512 -29 -1090 -183 -1548 -413 -743 -372 -1349 -945
                                -1749 -1653 -85 -151 -103 -187 -185 -370 -153 -343 -270 -776 -312 -1155 -24
                                -225 -34 -425 -28 -582 8 -176 39 -507 58 -597 69 -343 102 -464 194 -716 277
                                -760 832 -1473 1510 -1937 579 -397 1210 -628 1915 -700 159 -16 626 -16 795
                                0 784 75 1537 383 2165 886 161 129 477 446 606 606 117 146 240 324 346 500
                                272 449 475 1050 529 1565 24 226 35 491 27 640 -16 281 -49 551 -87 708 -11
                                48 -30 126 -42 175 -93 395 -293 841 -555 1237 -283 428 -643 795 -1072 1093
                                -221 153 -562 334 -832 440 -293 116 -661 212 -925 242 -55 6 -136 15 -180 21
                                -105 13 -466 19 -630 10z m525 -486 c1366 -113 2527 -963 3049 -2233 113 -275
                                192 -574 238 -902 25 -182 25 -713 0 -890 -74 -511 -216 -934 -447 -1335 -780
                                -1355 -2323 -2053 -3847 -1739 -1375 282 -2474 1364 -2777 2731 -69 313 -91
                                541 -83 878 13 568 133 1045 388 1545 347 681 904 1234 1587 1575 442 221 897
                                342 1412 378 120 9 322 5 480 -8z"
                            />
                            <path
                                d="M4943 6222 c-143 -51 -223 -163 -223 -311 0 -90 22 -150 82 -224 l50
                                -62 -138 -132 c-77 -73 -144 -133 -150 -133 -7 0 -48 39 -93 88 l-80 87 -403
                                -401 c-717 -713 -3491 -3458 -3568 -3531 -66 -61 -81 -71 -123 -76 -140 -19
                                -243 -117 -283 -267 -16 -63 -16 -67 5 -136 11 -39 34 -88 50 -110 15 -21 215
                                -239 444 -484 372 -398 423 -448 479 -477 35 -18 84 -38 110 -45 43 -11 55
                                -10 120 11 40 13 92 37 116 53 84 58 135 161 134 270 l-1 58 592 588 c326 323
                                1053 1044 1617 1602 564 558 1202 1190 1418 1405 l393 390 -91 97 c-49 53 -90
                                100 -90 105 0 14 258 253 273 253 7 0 28 -15 46 -34 55 -56 122 -81 221 -81
                                108 0 169 26 238 99 64 67 87 129 87 231 0 113 -25 159 -171 315 -824 880
                                -750 805 -821 837 -72 33 -171 40 -240 15z"
                            />
                        </g>
                    </svg>
                </div>
                <h2 class="skill-header">Researching at whirlwind speeds</h2>
                <p class="skill-description">Able to learn a wide range of technologies remarkably quickly, such as Svelte, Tensorflow, OpenCV, and SQL, from a vastly diverse set of topics.</p>
            </div>

            <div class="communication-skill">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 256 256" xml:space="preserve"><path d="M107.8 29.3c-7.8 2.1-13.9 8.3-15.9 16.2-.6 2-.7 5.5-.7 15v12.3H60.4c-25.8 0-31.2.1-33.4.7-8 2.1-14.1 8.2-16.2 16.1-1.1 4.1-1.1 80.2 0 84.3 2.3 8.6 9.4 15.2 18.2 16.5l3.2.5v15.4c0 16.8.1 17.3 2.7 19.6 1.7 1.4 3.9 1.9 6.4 1.5 1.5-.3 4-2.6 19.9-18.5l18.2-18.1h33c36.2 0 35.6 0 41-2.8 3.2-1.8 7.2-5.8 8.9-9.1 2.3-4.6 2.6-6.6 2.6-20v-12.3h11.7l18.2 18.1c15.9 15.9 18.4 18.2 19.9 18.5 2.4.5 4.7 0 6.4-1.5 2.6-2.3 2.7-2.8 2.7-19.6v-15.4l3.2-.5c8.8-1.4 16-7.9 18.2-16.5 1-4 1.1-80.2 0-84.2-2.1-8-8.2-14.1-16.1-16.2-4-1-117.4-1-121.3 0zm120 15.2c.7.5 1.7 1.5 2.2 2.2 1 1.2 1 1.6 1 40.8s0 39.6-1 40.8c-2.1 2.9-2.9 3.2-9.9 3.4s-7.7.6-9.9 3.4c-.9 1.2-1 2.1-1.2 12.1l-.2 10.8-12.4-12.5c-6.8-6.9-13.1-12.8-13.9-13.1-1.1-.5-3.6-.6-9.6-.6h-8.1V112c0-21.3-.1-22.5-2.6-27.4-1.7-3.3-5.7-7.3-8.9-9.1-5.1-2.7-6.1-2.8-27.8-2.8h-19.7V61.1c0-12.2.2-13.5 2-15.4 2.3-2.4-.6-2.3 61.2-2.2 57.3 0 57.5 0 58.8 1zm-81.1 44.2c.7.5 1.7 1.5 2.2 2.2 1 1.2 1 1.6 1 40.8s0 39.6-1 40.8c-.5.7-1.5 1.7-2.2 2.2-1.2 1-1.8 1-37 1.2-26.4.2-36 .4-36.7.8-.5.3-6.5 6.2-13.4 13l-12.4 12.5-.2-10.8c-.2-10-.3-10.9-1.2-12.1-2.1-2.9-2.9-3.2-9.9-3.4-6.9-.2-7.7-.6-9.9-3.4-1-1.2-1-1.7-1.1-39.6-.1-21.1 0-39 .1-39.8.3-1.8 2.3-4.2 4.1-5 1.1-.5 11.8-.6 58.8-.5 57.3.2 57.6.2 58.8 1.1z"/></svg>
                </div>
                <h2 class="skill-header">A versatile communicator with many mediums</h2>
                <p class="skill-description">With over 400+ hours of experience conversing at Kumon and Markville’s Computer Science Club, Harry can articulate himself with speech, handwritten and electronic presentations, and videos.</p>
            </div>

            <div class="creativity-skill">
                <div class="icon-wrapper">
                    <svg width="29" height="29" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13 24h-2c-.288 0-.563-.125-.753-.341L9.671 23h4.658l-.576.659c-.19.216-.465.341-.753.341zm1.867-3c.287 0 .52.224.52.5s-.233.5-.52.5H9.133c-.287 0-.52-.224-.52-.5s.233-.5.52-.5h5.734zM11.996 4C14.979 4 18 5.97 18 9.734c0 1.937-.97 3.622-1.907 5.252-.907 1.574-1.843 3.201-1.844 5.014h1.001c0-3.286 3.75-6.103 3.75-10.266C19 5.394 15.498 3 11.996 3 8.498 3 5 5.391 5 9.734 5 13.897 8.75 16.714 8.75 20h.999c.001-1.813-.936-3.44-1.841-5.014C6.97 13.356 6 11.671 6 9.734 6 5.97 9.017 4 11.996 4zm9.428 7.958a.5.5 0 0 1-.414.911l-.91-.414a.5.5 0 1 1 .413-.91l.911.413zm-18.848 0a.5.5 0 0 0 .414.911l.91-.414a.5.5 0 1 0-.413-.91l-.911.413zM21.5 9h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm-18-1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm16.818-3.089a.5.5 0 1 0-.57-.822l-.821.57a.5.5 0 0 0 .57.822l.821-.57zm-16.636 0a.5.5 0 1 1 .57-.822l.821.57a.5.5 0 0 1-.57.822l-.821-.57zm13.333-3.033a.5.5 0 0 0-.873-.488l-.488.873a.501.501 0 0 0 .873.488l.488-.873zm-10.03 0a.5.5 0 0 1 .873-.488l.488.873a.501.501 0 0 1-.873.488l-.488-.873zM12.5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1z"/></svg>
                </div>
                <h2 class="skill-header">Creative solutions to daunting problems</h2>
                <p class="skill-description">Experienced in innovating systems to reduce workload and improve results, including developing his own terrain generation technique and a pixel art design workflow.</p>
            </div>
        </div>
    </div>

    <div class="teaching-container">
        <Youtube videoId="ghZ83DrP85g" />
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
        background-image: linear-gradient(
            to left,
            var(--dark-1),
            var(--surface-3)
        );
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

    @media (min-width: 1024px) {
        .expanded-skills-block {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (min-width: 1440px) {
        .expanded-skills-block {
            padding-inline: var(--size-9);
        }
    }

    /* Skill Descriptions */
    .complete-skill-descriptions {
        text-align: center;
        max-width: 580px;
        padding-inline: var(--size-8);
        margin-inline: auto;
    }

    @media (min-width: 1024px) {
        .complete-skill-descriptions {
            text-align: left;
            margin-inline: 0;
        }
    }

    .icon-wrapper {
        background: var(--surface-2);
        border: 1px solid var(--surface-3);
        margin-bottom: var(--size-2);
        margin-inline: auto;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }

    @media (min-width: 1024px) {
        .icon-wrapper {
            margin-inline: 0;
        }
    }

    .skill-header {
        font-weight: var(--font-weight-6);
    }

    .skill-description {
        color: var(--surface-4);
        font-size: var(--font-size-3);
        line-height: 140%;
        margin-bottom: var(--size-8)
    }

    .teaching-container {
        display: flex;
        justify-content: space-between;
    }

    .teaching-description {
        text-align: right;
    }
</style>
