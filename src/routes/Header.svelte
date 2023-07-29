<script lang="ts">
    import Icon from "./Icon.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import { IconType } from "$lib/types";
    import { url } from "$lib/config";
</script>

<nav>
    <a href="/" class="title">
        <!-- Use --size-7 which is 2 rem -->
        <Logo length=2rem/>
        <b>Harry He</b>
    </a>

    <ul class="links">
        <li><a href="/" class="link">Home</a></li>
        <li><a href="/about" class="link">About</a></li>
        <li><a href="/#Projects" class="link">Projects</a></li>
        <li><a href="/#Skills" class="link">Skills</a></li>
        <li><a href="/contact" class="link">Contact</a></li>
    </ul>

    <div class="icons">
        <!-- Use --size-5 which is the same as 1.5rem -->
        <Icon length=1.5rem type={IconType.Github} link="https://github.com/he-is-harry"/>
        <Icon length=1.5rem type={IconType.Linkedin} link="https://ca.linkedin.com/in/harryghe"/>
        <Icon length=1.5rem type={IconType.Website} link={url}/>
    </div>
</nav>

<style>
    nav {
        padding-block: var(--size-3);
        padding-inline: var(--size-3);
        height: var(--size-7);
        line-height: var(--size-7);
        display: inline-block;
    }

    .title {
        color: var(--dark-1);
        font-weight: var(--font-weight-8);
        font-size: var(--font-size-4);
        vertical-align: middle;
    }

    .title:hover {
        color: var(--highlight-1);
    }

    .links {
        cursor: pointer;
        margin-block: var(--size-7);
        font-size: var(--font-size-2);
        vertical-align: middle;
    }

    .link {
        color: var(--dark-1);
    }

    .link:hover {
        color: var(--highlight-1);
    }

    a {
        text-decoration: none;
        font-family: "SF Pro Display";

        display: flex;
        align-items: center;
    }

    b {
        padding-left: var(--size-2);
    }

    @media (min-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }

        .icons {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }
</style>