// ONE-TIME OTG! Guide v8.0.11 recovery worker.
// Keeps the already-registered v8011 URL so broken v11 installations can receive this worker update.
// It does not touch OTG!/GT7 local data. It only releases the pinned v11 app shell and boots the v8.0.15 bridge shell.
const CACHE_NAME='otg-guide-v8.0.15-v11-recovery';
const TARGET='./index-guide-v8015.html';
const CRITICAL=[TARGET,'./js/bootstrap-guide-v8015.js?v=8015','./js/update-wire-guide-v8015.js?v=8015'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{
  const cache=await caches.open(CACHE_NAME);
  for(const url of CRITICAL){const r=await fetch(url,{cache:'no-store'});if(!r.ok)throw new Error('Recovery asset failed: '+url);await cache.put(url,r.clone());}
  await self.skipWaiting();
})());});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>(k.startsWith('racehub-')||k.startsWith('otg-'))&&k!==CACHE_NAME).map(k=>caches.delete(k)));
  await self.clients.claim();
})());});
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith((async()=>{const c=await caches.match(TARGET);return c||fetch(TARGET,{cache:'no-store'});})());
    return;
  }
  e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)));
});
