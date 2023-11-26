<script>
    import Sound from '../components/Sound.svelte';
    export let data;
</script>

<div style="display: flex; justify-content: center;">
    <img src="pops.png" style="width: 100%; height: auto; object-fit: contain;" alt="pops face" />
</div>

{#each data.subDirectories as { category, files }}
    <span>{category}</span>
    {#each files as { title, src}, soundIndex}
        <Sound {title} {src} {soundIndex} />
    {/each}
{/each}
