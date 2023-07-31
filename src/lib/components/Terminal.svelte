<script lang="ts">
    import { onMount } from "svelte";
    import { inview } from "svelte-inview";
    import { cubicInOut } from "svelte/easing";
    import { fade } from "svelte/transition";

    // Display Variables
    let cur_adjectives: number = 0;
    // 0 - blank, 1 - initial, 2 - final
    const initial_adjectives: string = "1.<br>2.<br>3.<br>";
    const final_adjectives: string = "1. Innovative<br>2. Persevering<br>3. Effective<br>"

    // Terminal Variables
    let cur_commands: string = "";
    const commands_src: string[] = [
        "harry@server:~$ ",
        "sudo -u harryhe psql",
        '<br>psql (14.8 (Ubuntu 14.8-0ubuntu0.22.04.1))<br>Type "help" for help.<br><br>harryhe=# ',
        "\\c harry_info",
        '<br>You are now connected to database "harry_info" as user "harryhe".<br>harry_info=# ',
        "SELECT adjective FROM skills LIMIT 3;",
        "<br>&nbsp;&nbsp;adjective<br>-------------<br>&nbsp;Innovative<br>&nbsp;Persevering<br>&nbsp;Effective<br>(3 rows)<br>harry_info=# ",
    ];

    let isInView: boolean;
    let command_index: number = 0;
    let letter_index: number = 0;
    const millidelay: number = 100;
    // Initial delay is 150 ms
    let tick_delay: number = 5;
    let ending: boolean = false;

    // Entering commands of console
    var intervalID = setInterval(() => {
        if (isInView) {
            if(tick_delay > 0) {
                tick_delay--;
            } else {
                if(ending) {
                    // Fix the scroll height of the terminal bar at the end
                    var elem = document.getElementById('terminal-text');
                    if(elem == null) {
                        throw new Error("Undefined Element");
                    } else {
                        console.log(elem.scrollHeight);
                        elem.scrollTop = elem.scrollHeight;
                    }

                    cur_adjectives = 2;
                    
                    clearInterval(intervalID);
                    return ;
                }

                if ((command_index & 1) == 0) {
                    if(command_index == 0) { 
                        // First command enters, the display prompts appear
                        cur_adjectives = 1;
                    }
                    cur_commands += commands_src[command_index];
                    command_index++;
                    // After computer prompts, there is a certain delay
                    // before a user would enter another command
                    // Should have delay (44 + 1) * 30ms = 1350ms
                    tick_delay = 44;
                    letter_index = 0;

                    if(command_index >= commands_src.length) {
                        // Give 30ms for the graphics to update so that the 
                        // scroll can be adjusted.
                        tick_delay = 1;
                        ending = true;
                    }
                } else {
                    if(letter_index < commands_src[command_index].length) {
                        cur_commands += commands_src[command_index][letter_index];
                        letter_index++;
                    } else {
                        command_index++;
                    }
                }
            }
        }
    }, millidelay);

    // Flickering of cursor
    const flicker_delay: number = 250;
    let cursor_active: boolean = true;
    onMount(() => {
        setInterval(() => {
            var cursor = document.getElementById('cursor');
            if(cursor == null) {
                throw new Error("Undefined Element");
            } else {
                if(tick_delay > 0 || ending) {
                    if(cursor_active) {
                        cursor.style.opacity = "0";
                        cursor_active = false;
                    } else {
                        cursor.style.opacity = "1";
                        cursor_active = true;
                    }
                } else {
                    if(!cursor_active) {
                        cursor.style.opacity = "1";
                        cursor_active = true;
                    }
                }
            }
        }, flicker_delay);
    });
</script>

<div class="animation-window" use:inview on:inview_change={(event) => {
    const { inView } = event.detail;
    isInView = inView;
}} >
    <div class="display-window">
        <div class="inner-display">
            <div class="display-header">
                <div class="buttons">
                    <span class="button-icon red-button" />
                    <span class="button-icon orange-button" />
                    <span class="button-icon green-button" />
                </div>
                <div class="display-title">
                    <p class="display-title-text">Who is Harry He?</p>
                </div>
            </div>
            <div class="display-bottom">
                <img
                    src="/DisplayImage.png"
                    alt="Harry Posing"
                    class="display-image"
                />
                {#if cur_adjectives == 1}
                    <h2 class="display-adjectives" in:fade={{ duration: 1000, easing: cubicInOut }}>{@html initial_adjectives}</h2>
                {:else if cur_adjectives == 2}
                    <h2 class="display-adjectives" in:fade={{ duration: 1000, easing: cubicInOut }}>{@html final_adjectives}</h2>
                {/if}
            </div>
        </div>
    </div>

    <div class="terminal-window">
        <div class="inner-terminal">
            <div class="terminal-header">
                <div class="buttons">
                    <span class="button-icon red-button" />
                    <span class="button-icon orange-button" />
                    <span class="button-icon green-button" />
                </div>
                <div class="terminal-title">
                    <p class="terminal-title-text">harry@server: ~</p>
                </div>
            </div>
            <div class="terminal-bottom" id="terminal-text">
                <p class="terminal-text">{@html cur_commands}<span id="cursor">&nbsp;</span></p>
            </div>
        </div>
    </div>
</div>

<style>
    .animation-window {
        max-width: 540px;
        min-width: 300px;
        width: 100%;
        margin: auto;
    }

    /* Button icons are shared between both windows */
    .buttons {
        display: block;
        margin-left: 12px;
    }

    .button-icon {
        border-radius: 50%;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
    }

    .red-button {
        background-color: #ff5f56;
    }
    .orange-button {
        background-color: #ffbd2e;
    }
    .green-button {
        background-color: #27c93f;
    }

    /* Top window */
    .display-window {
        max-width: 100%;
        height: 300px;
        position: relative;
    }

    .inner-display {
        width: 100%;
        height: 100%;
        /* Smaller box shadow used */
        box-shadow: var(--shadow-5);
        position: relative;
        border-radius: 5px;
        background-color: var(--surface-2);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .display-header {
        width: 100%;
        /* By default the height of the header is 38 px but
         can expand to be larger if needed */
        flex-basis: 38px;
        display: flex;
        align-items: center;
        background-color: var(--surface-1);
    }

    .display-title {
        position: absolute;
        width: 100%;
        height: 38px;
        /* The buttons take up 64 px, so add on var(--size-2) */
        left: calc(64px + var(--size-4));
        display: flex;
        align-items: center;
    }
    .display-title-text {
        font-size: var(--font-size-2);
    }

    .display-bottom {
        height: 100%;
        width: 100%;
        container-type: size;
        position: relative;
    }

    .display-image {
        animation: 1s fadeIn ease;
        width: auto;
        height: 100%;
    }

    .display-adjectives {
        position: absolute;
        top: 10cqh;
        left: 57cqw;

        color: var(--dark-1);
        font-size: var(--font-size-4); 
        line-height: 200%;
        white-space: nowrap;
    }
    @media (max-width: 480px) {
        /* Shift the image more to the left */
        .display-image {
            position: absolute;
            left: -40px;
        }

        .display-adjectives {
            top: 10cqh;
            font-size: var(--font-size-1); 
        }
    }
    @media (min-width: 480px) and (max-width: 640px) {
        .display-adjectives {
            top: 20cqh;
            left: 60cqw;
            font-size: var(--font-size-2); 
        }
    }

    /* Bottom terminal */
    .terminal-window {
        max-width: 100%;
        height: 300px;
        position: relative;
        z-index: 1;
        top: -20px;
    }

    /* The required width must be larger, so that the terminal is not squished so much */
    @media (min-width: 640px) {
        /* Top window is also handled here */
        .display-window {
            max-width: 90%;
        }

        .terminal-window {
            max-width: 90%;
            left: 5%;
        }
    }
    @media (min-width: 1024px) {
        .terminal-window {
            left: 15%;
        }
    }

    .inner-terminal {
        width: 100%;
        height: 100%;
        /* Larger box shadow used */
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.24);
        position: relative;
        border-radius: 5px;
        background-color: var(--dark-1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .terminal-header {
        width: 100%;
        /* By default the height of the header is 38 px but can expand to be larger */
        flex-basis: 38px;
        display: flex;
        align-items: center;
        background-color: var(--surface-1);
    }

    .terminal-title {
        position: absolute;
        width: 100%;
        height: 38px;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .terminal-title-text {
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-5);
    }

    .terminal-bottom {
        height: 100%;
        width: 100%;
        overflow: auto;
    }

    .terminal-text {
        color: var(--surface-1);
        font-family: "Courier New", Courier, monospace;
        font-size: var(--font-size-2); 
        line-height: var(--size-4);
        padding-inline: var(--size-2);
    }

    #cursor {
        border-bottom: 4px solid var(--surface-1);
        color: var(--dark-1);
        position: relative;
        top: -8px;
    }

    @media (max-width: 580px) {
        .terminal-text {
            font-size: var(--font-size-1);
        }
    }
    @media (max-width: 480px) {
        .terminal-text {
            font-size: 0.9rem;
        }
    }
    @media (max-width: 400px) {
        .terminal-text {
            font-size: 0.8rem;
        }
    }
</style>