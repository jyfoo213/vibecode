import { mkdir, copyFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
await mkdir(new URL('dist/data/',root), { recursive: true });
for (const file of ['index.html', 'app.js', 'style.css', 'data/landscape.json']) {
  await copyFile(new URL(file, root), new URL('dist/' + file,root));
}
console.log('Static website built in dist/');
