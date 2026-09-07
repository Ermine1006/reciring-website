(() => {
 const originalSections=new Set(['network','demo','how','reveal','ai','community','institutions','team','join']);
 function routeOriginalLink(){
  const id=location.hash.slice(1);
  if(originalSections.has(id))location.replace('/about/'+location.hash);
 }
 routeOriginalLink();
 window.addEventListener('hashchange',routeOriginalLink);
 const menu=document.querySelector('.more-menu');
 document.addEventListener('click',event=>{if(menu?.open&&!menu.contains(event.target))menu.open=false;});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu?.open){menu.open=false;menu.querySelector('summary').focus();}});
})();
