/** @type {any} */
let subDirectories;

fetch('sounds.json')
    .then(response => response.json())
    .then(json => {
        subDirectories = json;
    });

export function load() {
    return {
        subDirectories
    }
}