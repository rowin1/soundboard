<script>
    import { sound } from "svelte-sound";
    export let src;
    let trimmedSrc = src.replace('/static', '');
  </script>
  
  <button use:sound={{src: trimmedSrc, events: ["click"]}}>
      {trimmedSrc}
  </button>