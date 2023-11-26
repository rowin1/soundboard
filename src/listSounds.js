// * This script will generate a JSON file with the list of sounds
// * that can be imported in the SvelteKit app.
// *
// * The JSON file structure will look like this:
// [
// 	{
// 		category: "shaman",
// 		folder: "shaman",
// 		files: [
// 			{
// 				title: "earthbind-baby",
// 				src: "/sounds/shaman/earthbind-baby.mp3",
// 			}
// 		]
// 	}
// ]

import fs from 'fs';
import path from 'path';

const soundsDirectory = './static/sounds';
const categories = fs.readdirSync(soundsDirectory).filter(file => file !== '.DS_Store');

const data = categories.map(category => {
  const filesDirectory = path.join(soundsDirectory, category);
  const files = fs.readdirSync(filesDirectory).filter(file => file !== '.DS_Store');

  return {
    category,
    folder: category,
    files: files.map(file => ({
      title: path.basename(file, path.extname(file)),
      src: path.join('/static/sounds', category, file).replace('/static/', ''),
    })),
  };
});

fs.writeFileSync('./static/sounds.json', JSON.stringify(data, null, 2));