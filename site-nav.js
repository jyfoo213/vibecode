const menu=document.querySelector('.atlas-menu');
const groups=[...document.querySelectorAll('.atlas-group')];
const mobile=matchMedia('(max-width:700px)');
function resize(){menu.open=!mobile.matches;for(const group of groups)group.open=false;}
resize();mobile.addEventListener('change',resize);
for(const group of groups)group.querySelector('summary').addEventListener('click',()=>{if(!group.open)for(const other of groups)if(other!==group)other.open=false;});
document.addEventListener('click',event=>{if(!event.target.closest('.atlas-header')){for(const group of groups)group.open=false;if(mobile.matches)menu.open=false;}});
document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;const open=groups.find(g=>g.open);if(open){open.open=false;open.querySelector('summary').focus();event.preventDefault();}else if(mobile.matches&&menu.open){menu.open=false;menu.querySelector('summary').focus();event.preventDefault();}});
for(const link of document.querySelectorAll('.atlas-dropdown a'))link.addEventListener('click',()=>{for(const group of groups)group.open=false;if(mobile.matches)menu.open=false;});
