import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const data = JSON.parse(await readFile(new URL('../data/landscape.json', import.meta.url)));
test('company universe has unique identities and valid supply-chain positions', () => {
  assert.ok(data.companies.length>=40);
  const ids=new Set(data.companies.map(c=>c.id)); assert.equal(ids.size,data.companies.length);
  for(const c of data.companies) {assert.ok(data.layers.some(l=>l.id===c.layer));assert.ok(c.description.length>30);assert.ok(['AI-focused','Diversified'].includes(c.focus));}
});
test('all relationship endpoints exist, are distinct, and carry evidence status',()=>{
  const ids=new Set(data.companies.map(c=>c.id));
  for(const r of data.relationships){assert.ok(ids.has(r.source)&&ids.has(r.target));assert.notEqual(r.source,r.target);assert.ok(r.status.includes('unverified')||r.status==='primary source reviewed');if(r.status==='primary source reviewed')assert.match(r.asOf,/^\d{4}-\d{2}-\d{2}$/);assert.equal(new URL(r.sourceUrl).protocol,'https:');}
});
test('numeric valuation records require a date, basis, source, and historical disclosure',()=>{
  for(const c of data.companies){const v=c.valuation;if(v.usdBillions!==null){assert.ok(v.usdBillions>0);assert.match(v.asOf,/^\d{4}-\d{2}-\d{2}$/);assert.ok(v.sourceUrl);assert.ok(v.basis);assert.match(v.status,/historical/);}else assert.equal(v.status,'research pending');}
});
