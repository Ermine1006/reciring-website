(() => {
 // The original React page renders after the document; preserve its deep links.
 let observer,timeout;
 function goToSection(){
  if(observer)observer.disconnect();clearTimeout(timeout);
  const id=location.hash.slice(1);if(!id)return;
  const reveal=()=>{
   const target=document.getElementById(id);
   if(!target)return false;
   target.scrollIntoView({behavior:'instant',block:'start'});
   observer?.disconnect();clearTimeout(timeout);return true;
  };
  if(reveal())return;
  observer=new MutationObserver(reveal);
  observer.observe(document.getElementById('root'),{childList:true,subtree:true});
  timeout=setTimeout(()=>observer.disconnect(),10000);
 }
 goToSection();window.addEventListener('hashchange',goToSection);
})();
