<script lang="ts">
    import { onMount } from "svelte";
    import { inview } from "svelte-inview";

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
                    
                    clearInterval(intervalID);
                    return ;
                }

                if ((command_index & 1) == 0) {
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
    <div class="display-window" />
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

<!-- <p>Hello, this is a line.<br>This is another line in the same paragraph.</p> -->

<style>
    .animation-window {
        max-width: 540px;
        min-width: 300px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .display-window {
        max-width: 100%;
    }

    .terminal-window {
        max-width: 100%;
        height: 300px;
        position: relative;
        z-index: 1;
        top: -40px;
    }

    /* The required width must be larger, so that the terminal is not squished so much */
    @media (min-width: 640px) {
        .display-window {
            max-width: 90%;
        }

        .terminal-window {
            max-width: 90%;
            left: 5%;
        }
    }
    @media (min-width: 1440px) {
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