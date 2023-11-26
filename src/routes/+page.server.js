/** @type {any} */
let subDirectories;

fetch('/static/sounds.json')
  .then(response => response.json())
  .then(data => {
    subDirectories = data;
  });

export function load() {
    return {
        subDirectories
    }
}