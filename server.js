import http from 'node:http';
import { readFile } from 'node:fs/promises';
import {publicFiles,root} from './scripts/build.js';
const allowed=new Set(await publicFiles());
const types={html:'text/html',css:'text/css',js:'text/javascript',json:'application/json'};
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const name=pathname==='/'?'index.html':pathname.slice(1);if(!allowed.has(name)){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[name.split('.').pop()]+'; charset=utf-8','X-Content-Type-Options':'nosniff'}).end(await readFile(new URL(name,root)));}catch{res.writeHead(404).end('Not found');}}).listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('AI Atlas: http://localhost:'+(process.env.PORT||3000)));
