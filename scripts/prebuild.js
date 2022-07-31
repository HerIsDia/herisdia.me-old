import { readdir, writeFileSync } from 'fs';

console.log('⚙️ Prebuild script started');
let gtimer = Date.now();

console.log('🖼️ Getting number of images in the logos folder.');
let imageTimer = Date.now();
// Get number of images in the logos folder.
const images = readdir('./public/logos', (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(
      `🖼️ ${files.length} images found. (${Date.now() - imageTimer}ms)`
    );
    const results = { nbrOfImages: files.length, files: files };
    console.log(`📝 Writing results to file.`);
    imageTimer = Date.now();
    writeFileSync('./src/logo.json', JSON.stringify(results));
    console.log(`📝 Results written to file. (${Date.now() - imageTimer}ms)`);
  }
});

console.log(`✅ Prebuild script finished in ${Date.now() - gtimer}ms.`);
