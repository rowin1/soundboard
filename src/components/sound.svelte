<script>
    import { sound } from "svelte-sound";
    export let index;
    export let src;
    let trimmedSrc = src.replace('/static', '');
  </script>
  
  <span use:sound={{src: trimmedSrc, events: ["click"]}}>
      {index + 1}. {trimmedSrc.split('/')[3].replace('.mp3', '').replace(/-/g, ' ')}
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