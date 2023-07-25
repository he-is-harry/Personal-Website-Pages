<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import { url } from "$lib/config";
</script>

<svelte:head>
    <title>Contact - Harry He</title>
</svelte:head>

<div class="content">
    <div class="image-transition"></div>
    <img src="/ContactHeader.png" alt="Serious Harry" class="contact-header"/>
    <div class="contact-block">
        <div class="form-title">
            <h1>Contact</h1>
            <div class="logo-line">
                <div class="break-line"></div>
                <div class="logo">
                    <!-- Use --size-5 which is 1.5 rem -->
                    <Logo length=2rem/>
                </div>
                <div class="break-line"></div>
            </div>
        </div>
        
    
        <div class="form">
            <form action="https://formsubmit.co/d5da8b5555cb998538ede8703c44f0a7" method="POST">
                <input type="hidden" name="_subject" value="New website contact">
                <h5>EMAIL</h5>
                <input type="email" name="email" placeholder="Your email" required class="email-input">
                <input type="hidden" name="_next" value="{url}thanks">
                <h5>NAME</h5>
                <input type="text" name="name" placeholder="Name" required class="name-input">
                <h5>MESSAGE</h5>
                <textarea name="message" cols="40" rows="10" placeholder="Write your message" required class="message-input"></textarea>
                <button type="submit" class="submit-button">Send</button>
            </form>
        </div>
    </div>
</div>



<style>
    .content {
        background-color: var(--dark-2);
    }

    .image-transition {
        height: var(--size-7);
        background: linear-gradient(var(--surface-1) 30%, var(--true-dark) 80%);
    }

    .contact-header {
        position: relative;
        left: 0px;
        top: 0px;
        width: 100%;
        max-height: 100vh;
        object-fit: cover;
        object-position: top center;
        -webkit-filter: brightness(0.8);
        filter: brightness(0.8);
        z-index: auto;
    }

    .contact-block {
        position: relative;
        z-index: 9999;
    }

    .form-title {
        margin-top: calc(-1 * var(--size-12));
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        padding-bottom: var(--size-6);
    }

    h1 {
        z-index: 2;
        color: var(--surface-1);
        /* margin-left: calc(50% - (70% + 2 * var(--size-4) + 2rem) / 2 - 3px); */
        margin-inline: calc(15% - var(--size-4) - 1rem - 3px);
        margin-block: var(--size-4);
    }

    .logo-line {
        width: 100%;
        display: inline-block;
        text-align: center;
    }

    .logo-line > * {
        vertical-align: middle;
    }

    .break-line {
        background-color: var(--surface-1);
        border-radius: 9999px;
        width: 35%;
        height: var(--size-1);
        display: inline-block;
        margin-inline: var(--size-4);
    }

    .logo {
        display: inline-block;
    }

    .form {
        /* Center all elements */
        margin: 0 auto;
        padding-bottom: var(--size-6);
    }

    h5 {
        /* margin-left: calc(50% - (70% + 2 * var(--size-4) + 2rem) / 2 - 3px); */
        margin-left: calc(15% - var(--size-4) - 1rem - 3px);
        color: var(--surface-1);
        margin-block: var(--size-2);
    }

    input {
        display: block;
        width: calc(70% + 2 * var(--size-4) + 2rem);
        margin-bottom: var(--size-4);
        margin-inline: auto;
        cursor: text;
        padding-left: var(--size-2);
        padding-right: var(--size-1);
        padding-block: var(--size-1);
    }

    .email-input, .name-input {
        height: var(--size-7);
        border: 0;
        background-color: var(--surface-1);
        color: var(--surface-5);
        font-family: var(--font-sans-def);
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-4);
    }

    .message-input {
        display: block;
        width: calc(70% + 2 * var(--size-4) + 2rem);
        cursor: text;
        padding-left: var(--size-2);
        padding-top: var(--size-2);
        padding-right: var(--size-1);
        padding-bottom: var(--size-1);
        margin-bottom: var(--size-4);
        margin-inline: auto;

        height: var(--size-11);
        border: 0;
        background-color: var(--surface-1);
        color: var(--surface-5);
        font-family: var(--font-sans-def);
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-4);
    }

    .submit-button {
        /* Some odd adjustment of 3 px */
        /* margin-left: calc(50% - (70% + 2 * var(--size-4) + 2rem) / 2 - 3px); */
        margin-left: calc(15% - var(--size-4) - 1rem - 3px);

        /* margin-top: .125rem;
        margin-bottom: .125rem; */
        cursor: pointer;
        background-color: var(--brand);
        padding: .5rem 1.25rem;
        text-align: center;
        font-family: var(--font-sans-def);
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-5);
        color: var(--surface-1);
        transition-property: background-color;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: 150ms;
        border: 0;
    }
    .submit-button:hover {
        background-color: var(--brand-dark-1);
    }
    .submit-button:active {
        background-color: var(--brand-dark-2);
    }

    @media (min-width: 480px) {
        .contact-header {
            height: 240px;
        }
    }
    @media (min-width: 768px) {
        .contact-header {
            height: 384px;
        }
    }
    @media (min-width: 1024px) {
        .contact-header {
            height: 512px;
        }
    }
    @media (min-width: 1440px) {
        .contact-header {
            height: 720px;
        }
    }
</style>