<script>
    import Sound from '../components/Sound.svelte';
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.sounds as sound}
    <Sound src={sound} />
{/each}
