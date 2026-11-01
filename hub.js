import {estimate,filterLessons} from './cost.js';
const $=id=>document.getElementById(id);
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;};
const link=(url,label)=>{const a=el('a',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;};
try{
const response=await fetch('./data/learning.json');if(!response.ok)throw Error('Lessons unavailable');
const data=await response.json();let category='All tracks';let completed=new Set();
try{const saved=JSON.parse(localStorage.getItem('ai-atlas-progress-v1')||'[]');if(Array.isArray(saved))completed=new Set(saved.filter(id=>data.lessons.some(l=>l.id===id)));}catch{}
function progress(){ $('progress-text').textContent=`${completed.size} / ${data.lessons.length} completed`;$('progress').max=data.lessons.length;$('progress').value=completed.size;}
function render(){
 const lessons=filterLessons(data.lessons,category,$('search').value);$('lessons').replaceChildren();$('empty').hidden=lessons.length>0;$('result-count').textContent=`${lessons.length} lesson${lessons.length===1?'':'s'} · about 3 minutes each`;
 for(const l of lessons){const card=el('article',null,'lesson');const meta=el('div',null,'card-meta');meta.append(el('span',l.category),el('span','03 MIN ↗'));card.append(meta,el('h3',l.title),el('p',l.summary));const d=el('details');d.append(el('summary','Read the field note'),el('p',l.detail));const exercise=el('p',null,'exercise');exercise.append(el('strong','Try this · '),document.createTextNode(l.exercise));d.append(exercise);card.append(d);const bottom=el('div',null,'lesson-bottom');const s=data.sources.find(s=>s.id===l.source);bottom.append(link(s.url,'Source ↗'));const b=el('button',completed.has(l.id)?'✓ Completed':'Mark complete','complete');b.type='button';b.setAttribute('aria-pressed',String(completed.has(l.id)));b.setAttribute('aria-label',`Mark ${l.title} complete`);b.onclick=()=>{if(completed.has(l.id))completed.delete(l.id);else completed.add(l.id);try{localStorage.setItem('ai-atlas-progress-v1',JSON.stringify([...completed]));}catch{$('progress-text').title='Progress is available for this session only.';}b.textContent=completed.has(l.id)?'✓ Completed':'Mark complete';b.setAttribute('aria-pressed',String(completed.has(l.id)));progress();};bottom.append(b);card.append(bottom);$('lessons').append(card);}
}
for(const c of ['All tracks',...new Set(data.lessons.map(l=>l.category))]){const b=el('button',c);b.type='button';b.setAttribute('aria-pressed',String(c===category));b.onclick=()=>{category=c;for(const x of $('filters').children)x.setAttribute('aria-pressed',String(x===b));render();};$('filters').append(b);}
$('search').oninput=render;
for(const s of data.sources){const d=el('details');d.append(el('summary',s.title),el('p',s.note+' Checked '+data.checked+'.'),link(s.url,'Open primary source ↗'));$('source-list').append(d);}
for(const m of data.models){const o=el('option',m.name);o.value=m.id;$('model').append(o);}
function model(){const m=data.models.find(m=>m.id===$('model').value);$('input-rate').value=m.input;$('output-rate').value=m.output;note(m);calculate();}
function note(m){$('rate-note').replaceChildren(document.createTextNode(m.note+' '));if(m.id!=='custom')$('rate-note').append(link(data.sources.find(s=>s.id===m.source).url,'Pricing source ↗'));}
const ids=['input-tokens','output-tokens','input-rate','output-rate','tasks','calls'];
function calculate(){if(!$('cost-form').checkValidity()){$('per-task').textContent='—';$('monthly').textContent='—';$('cost-status').textContent='Enter valid values within the shown limits. Calls per task must be at least 1.';return;}const v=ids.map(id=>Number($(id).value));const result=estimate({inputTokens:v[0],outputTokens:v[1],inputRate:v[2],outputRate:v[3],tasks:v[4],calls:v[5]});$('per-task').textContent='$'+result.perTask.toLocaleString('en-US',{minimumFractionDigits:4,maximumFractionDigits:4});$('monthly').textContent=result.monthly.toLocaleString('en-US',{style:'currency',currency:'USD'});$('cost-status').textContent='Model token estimate only · USD · assumes the same workload on every call.';}
$('model').onchange=model;for(const id of ids)$(id).oninput=()=>{if(id.endsWith('rate')){$('model').value='custom';note(data.models.find(m=>m.id==='custom'));}calculate();};$('cost-form').onsubmit=e=>e.preventDefault();progress();render();model();
}catch(error){$('result-count').textContent='The learning data could not load. Please refresh or explore the existing notes below.';console.error(error);}
