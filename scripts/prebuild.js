import { readdir, writeFileSync } from 'fs';

// Get number of images in the rdmImages folder.
const images = readdir('./public/logos', (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    const results = { nbrOfImages: files.length, files: files };
    writeFileSync('./src/logo.json', JSON.stringify(results));
  }
});
