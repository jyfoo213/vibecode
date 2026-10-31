const data = await fetch('./data/landscape.json').then(r => { if (!r.ok) throw new Error('Dataset unavailable'); return r.json(); });
const $ = id => document.getElementById(id);
let selected = null, layer = 'all', query = '', descending = true;
const money = v => v === null ? 'Pending research' : '$' + v.toLocaleString() + 'B';
const find = id => data.companies.find(c => c.id === id);
const visible = () => data.companies.filter(c => (layer === 'all' || c.layer === layer) && `${c.name} ${c.description} ${c.focus}`.toLowerCase().includes(query));
function node(tag, text, cls) { const el = document.createElement(tag); if (text !== undefined) el.textContent = text; if (cls) el.className = cls; return el; }
function reference(url, label) { const a = node('a',label); a.href=url; a.target='_blank'; a.rel='noopener noreferrer'; return a; }
function renderFilters() {
  $('filters').replaceChildren();
  for (const l of [{id:'all',name:'All layers'},...data.layers]) {
    const b=node('button',l.name, layer===l.id?'selected':''); b.setAttribute('aria-pressed',String(layer===l.id)); b.onclick=()=>{layer=l.id;renderFilters();render();}; $('filters').append(b);
  }
}
function showTip(c,el) {
  const tip=$('tooltip'); tip.replaceChildren(node('strong',c.name),node('p',c.description),node('small',c.focus+' · '+c.ownership)); tip.hidden=false;
  const r=el.getBoundingClientRect(); tip.style.left=Math.min(Math.max(12,r.left),window.innerWidth-300)+'px'; tip.style.top=Math.max(10,Math.min(r.bottom+8,window.innerHeight-170))+'px';
}
function render() {
  const companies=visible(); $('columns').replaceChildren();
  for(const l of data.layers) {
    const col=node('section',undefined,'map-column'); col.append(node('p',l.name,'column-title'),node('small',l.subtitle,'column-subtitle'));
    for(const c of companies.filter(c=>c.layer===l.id)) {
      const connected = !selected || c.id===selected || data.relationships.some(r => (r.source===selected&&r.target===c.id)||(r.target===selected&&r.source===c.id));
      const b=node('button',undefined,'company-node '+(selected===c.id?'chosen ':'')+(!connected?'muted':'')); b.dataset.id=c.id;
      const initials=node('span',c.name.replace(' AI','').slice(0,2).toUpperCase(),'monogram');
      const text=node('span'); text.append(node('strong',c.name),node('small',c.focus)); b.append(initials,text); b.onclick=()=>select(c.id);
      b.onmouseenter=()=>showTip(c,b); b.onmouseleave=()=>{$('tooltip').hidden=true;}; b.onfocus=()=>showTip(c,b); b.onblur=()=>{$('tooltip').hidden=true;}; col.append(b);
    }
    $('columns').append(col);
  }
  $('count').textContent=`${companies.length} companies shown · arrows point from provider / investor to recipient`;
  if(!companies.length) $('count').textContent='No companies match. Try another search or layer.';
  renderTable(companies); requestAnimationFrame(drawEdges);
}
function drawEdges() {
  const svg=$('edges'), bounds=$('map').getBoundingClientRect(); svg.replaceChildren(); svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
  svg.innerHTML='<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"/></marker></defs>';
  for(const r of data.relationships) {
    const a=document.querySelector(`[data-id="${r.source}"]`), b=document.querySelector(`[data-id="${r.target}"]`); if(!a||!b)continue;
    const x=a.getBoundingClientRect(),y=b.getBoundingClientRect(); const forward=x.left<y.left;
    const x1=(forward?x.right:x.left)-bounds.left,y1=x.top+x.height/2-bounds.top,x2=(forward?y.left:y.right)-bounds.left,y2=y.top+y.height/2-bounds.top;
    const p=document.createElementNS('http://www.w3.org/2000/svg','path'); const dx=Math.max(25,Math.abs(x2-x1)*.45)*(forward?1:-1);
    p.setAttribute('d',`M${x1},${y1} C${x1+dx},${y1} ${x2-dx},${y2} ${x2},${y2}`); p.setAttribute('marker-end','url(#arrow)');
    p.classList.add(selected&&(r.source===selected||r.target===selected)?'highlight':'connection'); if(selected&&r.source!==selected&&r.target!==selected)p.classList.add('faded'); svg.append(p);
  }
}
function renderTable(companies) {
  const sorted=[...companies].sort((a,b)=>{const av=a.valuation.usdBillions,bv=b.valuation.usdBillions; if(av===null&&bv===null)return a.name.localeCompare(b.name); if(av===null)return 1;if(bv===null)return -1;return descending?bv-av:av-bv;});
  const ranked=data.companies.filter(c=>c.valuation.usdBillions!==null).sort((a,b)=>b.valuation.usdBillions-a.valuation.usdBillions);
  $('company-rows').replaceChildren();
  for(const c of sorted){ const tr=node('tr');tr.append(node('td',c.valuation.usdBillions===null?'—':String(ranked.indexOf(c)+1)+'*'));const name=node('td');const b=node('button',c.name,'company-link');b.onclick=()=>select(c.id);name.append(b,node('small',c.focus+' · '+c.ownership));tr.append(name,node('td',data.layers.find(l=>l.id===c.layer).name),node('td',money(c.valuation.usdBillions)),node('td',(c.valuation.asOf||'No verified figure')+' · '+c.valuation.status));$('company-rows').append(tr);}
}
function select(id) {selected=id;$('tooltip').hidden=true;const c=find(id),v=c.valuation,body=$('detail-body');body.replaceChildren(node('p',c.focus+' / '+c.ownership,'eyebrow'),node('h2',c.name),node('p',c.description),node('h3','Valuation record'),node('p',money(v.usdBillions),'value'),node('p',v.basis+(v.asOf?' · '+v.asOf:'')),node('p',v.status,'status'));if(v.sourceUrl)body.append(reference(v.sourceUrl,'Funding reference (unverified) ↗'));body.append(reference(c.website,'Company website ↗'),node('h3','Connections'));
  const rels=data.relationships.filter(r=>r.source===id||r.target===id);
  if(!rels.length)body.append(node('p','No connections researched yet. This does not mean the company operates alone.'));
  for(const r of rels){const box=node('article',undefined,'relationship');box.append(node('small',r.type.toUpperCase()),node('p',find(r.source).name+' → '+find(r.target).name),node('p',r.description),node('small',r.status+' · date pending'));box.append(reference(r.sourceUrl,'Research reference ↗'));body.append(box);}
  $('detail').hidden=false;render();$('close').focus();
}
function close(){selected=null;$('detail').hidden=true;render();}
$('close').onclick=close;$('reset').onclick=()=>{query='';layer='all';$('search').value='';close();renderFilters();};
$('search').oninput=e=>{query=e.target.value.toLowerCase();render();};
$('sort').onclick=()=>{descending=!descending;$('sort').textContent='Historical value '+(descending?'↓':'↑');render();};
for(const tab of ['map','list'])$(tab+'-tab').onclick=()=>{for(const t of ['map','list']){$(t+'-view').hidden=t!==tab;$(t+'-tab').classList.toggle('active',t===tab);$(t+'-tab').setAttribute('aria-pressed',String(t===tab));}requestAnimationFrame(drawEdges);};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();$('tooltip').hidden=true;}});window.addEventListener('resize',()=>{$('tooltip').hidden=true;drawEdges();});
renderFilters();render();
