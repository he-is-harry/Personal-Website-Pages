<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="error">
    <h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style>
    .error {
        height: 100vh;
        display: grid;
        place-content: center;
    }
</style>