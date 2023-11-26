<script>
    import { sound } from "svelte-sound";
    export let title;
    export let soundIndex;
    export let src;
</script>
  
  <span use:sound={{src: src, events: ["click"]}}>
      {soundIndex + 1}. {title.replace(/-/g, ' ')}
  </span>

  <style>
    span {
        display: grid;
        padding-top: 9.6px;
        padding-bottom: 9.6px;
        font-family: Helvetica Neue, Arial;
        font-size: 16px;
    }
  </style>