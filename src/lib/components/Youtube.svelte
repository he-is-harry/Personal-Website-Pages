<script lang="ts">
    import { onMount } from "svelte";

    let player;
    export let videoId: string;

    const ytPlayerId = "youtube-player";

    onMount(() => {
        window.addEventListener("YoutubePlayerSizeReady", (event) => {
            function load() {
                // The variables decalred in the iframe_api will load
                // in all of these values later.
                // @ts-ignore
                player = new YT.Player(ytPlayerId, {
                    // The event dispatched is a custom event with certain detail, however
                    // we only assume it is a standard event here so we must ignore the errors
                    // @ts-ignore
                    height: event.detail.height,
                    // @ts-ignore
                    width: event.detail.width,
                    videoId: videoId,
                });
            }

            // @ts-ignore
            if (window.YT) {
                load();
            } else {
                // @ts-ignore
                window.onYouTubeIframeAPIReady = load;
            }
        });
    });
</script>

<svelte:head>
    <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div id={ytPlayerId} />
