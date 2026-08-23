/* rh-guide v6.0.132 — immediate Settings update install/reload */
(()=>{
'use strict';
function currentVersion(){return document.querySelector('meta[name="racehub-version"]')?.content||'6.0.132';}
function cmp(a,b){const aa=String(a||'').split('.').map(n=>parseInt(n,10)||0),bb=String(b||'').split('.').map(n=>parseInt(n,10)||0),l=Math.max(aa.length,bb.length);for(let i=0;i<l;i++){const x=aa[i]||0,y=bb[i]||0;if(x>y)return 1;if(x<y)return -1;}return 0;}
async function fetchPublishedIndex(){const u=new URL('index.html',document.baseURI);u.searchParams.set('otg_update',Date.now());const r=await fetch(u.href,{cache:'no-store',credentials:'same-origin',headers:{'Cache-Control':'no-cache, no-store, max-age=0','Pragma':'no-cache'}});if(!r.ok)throw new Error('update check failed '+r.status);return r.text();}
function waitForWorker(reg,timeout=8000){return new Promise(resolve=>{if(reg.waiting)return resolve(reg.waiting);const w=reg.installing;if(!w)return resolve(null);const done=()=>{if(reg.waiting)resolve(reg.waiting);else if(w.state==='activated')resolve(w);};w.addEventListener('statechange',done);setTimeout(()=>resolve(reg.waiting||null),timeout);});}
window.rhCheckForUpdate=async function(){
 const CURRENT=currentVersion(),b=document.getElementById('rhCheckUpdateButton'),el=document.getElementById('rhUpdateStatus'),set=t=>{if(el)el.textContent=t};if(b)b.disabled=true;
 try{set(`Installed version: ${CURRENT} • Checking latest version…`);const html=await fetchPublishedIndex();const remote=html.match(/name=["']racehub-version["']\s+content=["']([^"']+)/i)?.[1];if(!remote)throw new Error('version missing');if(cmp(remote,CURRENT)<=0){set(`Installed version: ${CURRENT} • Latest version: ${remote} — up to date.`);return;}set(`Installed version: ${CURRENT} • Latest version: ${remote} — installing…`);
  const reg=await navigator.serviceWorker?.getRegistration?.();if(!reg){location.reload();return;}
  let changed=false;const changedP=new Promise(resolve=>navigator.serviceWorker.addEventListener('controllerchange',()=>{changed=true;resolve();},{once:true}));
  await reg.update();const worker=reg.waiting||await waitForWorker(reg);if(worker)worker.postMessage({type:'SKIP_WAITING'});
  await Promise.race([changedP,new Promise(r=>setTimeout(r,5000))]);set(`Installed version: ${CURRENT} • Latest version: ${remote} — restarting…`);location.reload();
 }catch(e){console.warn('OTG update check',e);set(`Installed version: ${CURRENT} • Latest version unavailable. Try again later.`);}finally{if(b)b.disabled=false;}
};
})();
