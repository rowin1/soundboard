// * This script will generate a JSON file with the list of sounds
// * that can be imported in the SvelteKit app.
// *
// * The JSON file structure will look like this:
// [
// 	{
// 		category: '',
// 		folder: '',
// 		files: [
// 			{
// 				title: '',
// 				src: '',
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
      src: path.join('/static/sounds', category, file),
    })),
  };
});

fs.writeFileSync('./static/sounds.json', JSON.stringify(data, null, 2));