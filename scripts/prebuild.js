import { readdir, writeFileSync, readFileSync } from 'fs';
import { espo } from './espagnolo.js';

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

console.log('🅰️ Generate quotes.');
const filefr = readFileSync('./src/quotes/fr.txt');
const fileen = readFileSync('./src/quotes/en.txt');
const quotesfr = filefr.toString().split('\n');
const quotesen = fileen.toString().split('\n');
const espoQuotes = [];
quotesfr.forEach((quote) => {
  espoQuotes.push(espo(quote));
});
const newQuotes = { fr: quotesfr, en: quotesen, espo: espoQuotes };
console.log(`📝 Writing quotes to file.`);
writeFileSync('./src/quotes.json', JSON.stringify(newQuotes));
console.log(`📝 Quotes written to file.`);
