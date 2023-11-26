<script>
    import { sound } from "svelte-sound";

    /** @type {string} */
    export let title;

    /** @type {number} */
    export let soundIndex;

    /** @type {string} */
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
        padding-left: 26px;
        font-family: verdana, Helvetica Neue, Arial;
        font-size: 10.5px;
        -webkit-font-smoothing: antialiased;
    }
  </style>