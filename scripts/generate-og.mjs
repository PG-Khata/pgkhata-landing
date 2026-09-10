import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, '..', 'public', 'og-image.svg'));

sharp(svg)
  .resize(1200, 630)
  .png()
  .toFile(join(__dirname, '..', 'public', 'og-image.png'))
  .then(() => console.log('Generated public/og-image.png'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
