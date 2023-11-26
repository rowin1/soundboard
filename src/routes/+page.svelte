<script>
    import Sound from '../components/Sound.svelte';
    export let data;
</script>

<div style="display: flex; justify-content: center;">
    <img src="pops.png" alt="pops face" />
</div>

{#each data.sounds as sound, listIndex}
    <Sound src={sound} {listIndex} />
{/each}
