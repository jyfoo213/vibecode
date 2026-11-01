export const groups=[
 {label:'Learn',home:'./#learn',items:[['Lessons','./#learn','Short notes on AI product decisions'],['Topics','./topics.html','Choose your next learning thread'],['Skills roadmap','./skills.html','Build capability in layers'],['Local vs cloud coding','./coding-models.html','Understand the development workflow'],['Claude Code vs Codex','./coding-agents.html','Follow the prompt-to-implementation loop']]},
 {label:'Explore',home:'./industry.html',items:[['Industry map','./industry.html','See how the AI ecosystem connects'],['Cost lab','./#calculator','Model token costs and agent loops']]},
 {label:'Practice',home:'./interview.html',items:[['Interview prep','./interview.html','Practice with your own stories'],['Learning inbox','./journal.html','Capture questions and revisit your notes']]},
 {label:'Reference',home:'./sources.html',items:[['Sources','./sources.html','Find research and primary references'],['Glossary','./glossary.html','Look up the language of AI']]}
];
export const pages={'index.html':{label:'Overview'},'coding-agents.html':{label:'Claude Code vs Codex',group:'Learn'},'topics.html':{label:'Topics',group:'Learn'},'skills.html':{label:'Skills roadmap',group:'Learn'},'coding-models.html':{label:'Local vs cloud coding',group:'Learn'},'industry.html':{label:'Industry map',group:'Explore'},'questions.html':{label:'Your questions'},'interview.html':{label:'Interview prep',group:'Practice'},'journal.html':{label:'Learning inbox',group:'Practice'},'sources.html':{label:'Sources',group:'Reference'},'glossary.html':{label:'Glossary',group:'Reference'}};
export function navigation(file){const page=pages[file];return `<!-- Shared navigation: scripts/navigation.js; run npm run nav after changes. -->
<header class="atlas-header">
 <a class="atlas-brand" href="./" aria-label="AI Atlas home"${file==='index.html'?' aria-current="page"':''}><span aria-hidden="true">✳</span> AI ATLAS</a>
 <details class="atlas-menu" open><summary class="atlas-menu-toggle">Menu <span aria-hidden="true">☰</span></summary>
 <nav class="atlas-primary" aria-label="Main navigation"><a class="atlas-questions" href="./questions.html"${file==='questions.html'?' aria-current="page"':''}>Your questions</a>${groups.map(g=>`
  <details class="atlas-group${page.group===g.label?' atlas-active-group':''}"><summary>${g.label}<span aria-hidden="true">⌄</span></summary><div class="atlas-dropdown"><p class="atlas-group-label">${g.label.toUpperCase()}</p>${g.items.map(([label,url,description])=>`<a href="${url}"${url==='./'+file?' aria-current="page"':''}><span>${label}</span><small>${description}</small></a>`).join('')}</div></details>`).join('')}
 </nav></details>
 <a class="atlas-quick" href="./journal.html">Question inbox <span aria-hidden="true">→</span></a>
</header>
<nav class="atlas-location" aria-label="Breadcrumb"><ol><li><a href="./">Home</a></li>${page.group?`<li><a href="${groups.find(g=>g.label===page.group).home}">${page.group}</a></li>`:''}<li aria-current="page">${page.label}</li></ol><span class="atlas-location-note">THE AI PM FIELD GUIDE</span></nav>`;}
