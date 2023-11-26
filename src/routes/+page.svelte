<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import Sound from '../components/Sound.svelte';

    /** @type {any} */
    let subDirectories = [];

    onMount(async () => {
        const res = await fetch(`${base}/sounds.json`)
        subDirectories = await res.json();
    });
</script>

<div style="display: flex; justify-content: center;">
    <img src="pops.png" style="width: 100%; height: auto; object-fit: contain;" alt="pops face" />
</div>

{#each subDirectories as { category, files }}
    <div class="category">{category}</div>
    {#each files as { title, src}, soundIndex}
        <Sound {title} {src} {soundIndex} />
    {/each}
{/each}

<style>
    .category {
        font-family: verdana, arial;
        font-size: 10.5px;
        font-weight: bold
    }
</style>
