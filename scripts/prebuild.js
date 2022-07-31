import { readdir, writeFileSync } from 'fs';

console.log('⚙️ Prebuild script started');

console.log('🖼️ Getting number of images in the logos folder.');
// Get number of images in the logos folder.
readdir('./public/logos', (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`🖼️ ${files.length} images found.`);
    const results = { nbrOfImages: files.length, files: files };
    console.log(`📝 Writing results to file.`);
    writeFileSync('./src/logo.json', JSON.stringify(results));
    console.log(`📝 Results written to file.`);
  }
});
