const soundModules = import.meta.globEager('../../static/sounds/**/*.mp3');

const sounds = Object.keys(soundModules).map((filePath) => {
  const sound = soundModules[filePath].default;
  return sound;
});

export function load() {
    return {
        sounds
    }
}