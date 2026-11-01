import { mkdir, copyFile, readdir, rm } from 'node:fs/promises';
export const root = new URL('../', import.meta.url);
export async function publicFiles(){const names=await readdir(root);return [...names.filter(n=>/\.(html|css|js)$/.test(n)&&n!=='server.js'),...(await readdir(new URL('data/',root))).filter(n=>n.endsWith('.json')).map(n=>'data/'+n)];}
if(process.argv[1] && new URL('file://'+process.argv[1]).href===import.meta.url){await rm(new URL('dist/',root),{recursive:true,force:true});await mkdir(new URL('dist/data/',root),{recursive:true});for(const file of await publicFiles())await copyFile(new URL(file,root),new URL('dist/'+file,root));console.log('Static website built in dist/');}
