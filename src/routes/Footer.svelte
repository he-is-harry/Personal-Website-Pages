<script lang="ts">
    import Icon from "./Icon.svelte";
    import { IconType } from "$lib/types";
    import { url } from "$lib/config";

    import { base } from '$app/paths';
</script>

<div class="footer">
    <h2 class="large-name">Harry He</h2>

    <div class="mini-menu">
        <a href="{base}/" class="link">Home</a>
         | 
        <a href="{base}/about" class="link">About</a>
         | 
        <a href="{base}/#Projects" class="link">Projects</a>
         | 
        <a href="{base}/#Skills" class="link">Skills</a>
         | 
        <a href="{base}/contact" class="link">Contact</a>
    </div>

    <p class="quote">Imagine it. Implement it.</p>

    <div class="icons">
        <!-- Use --size-5 which is the same as 1.5rem -->
        <Icon length=1.5rem type={IconType.Github} link="https://github.com/he-is-harry"/>
        <Icon length=1.5rem type={IconType.Linkedin} link="https://ca.linkedin.com/in/harryghe" innerColor="--brand-surface"/>
        <Icon length=1.5rem type={IconType.Website} link={url}/>
        <Icon length=1.5rem type={IconType.Email} link="mailto:harryhemr@gmail.com"/>
    </div>
    
    <p class="f1-rich-text">© 2023 Harry He. All Rights Reserved.</p>
</div>

<style>
    .footer {
        background-color: var(--brand-surface);
        text-align: center;
    }

    .large-name {
        font-family: var(--font-sans-def);
	    font-style: normal;
	    font-weight: var(--font-weight-8);
	    font-size: var(--font-size-5);
        padding: var(--size-3);
        margin: 0;
    }

    .mini-menu {
        font-size: var(--font-size-2);
        padding: var(--size-2);
        font-family: "SF Pro Display";
        font-weight: var(--font-weight-5);
    }

    .quote {
        font-style: italic;
    }

    .link {
        color: var(--dark-1);
        padding-inline: var(--size-1);
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    .icons {
        padding: var(--size-4);
        justify-content: center;
    }

    @media (min-width: 480px) {
        .icons {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }

    .f1-rich-text {
        font-size: var(--font-size-0);
        padding: var(--size-2);
    }
</style>
