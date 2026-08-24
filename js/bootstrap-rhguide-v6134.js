// rh-guide v6.0.134 — preserve established guide state + independent service worker
state=rhLoad();
rhSync();
// Upgrade guard: an established guide must never be sent back through onboarding merely
// because an older build left the onboarded flag false/missing. Catalogue population alone
// is deliberately not used as proof of onboarding.
if(state && !state.onboarded){
  const spaces=Array.isArray(state.spaces)?state.spaces:[];
  const established=!!String(state.driverName||'').trim() || spaces.some(s=>
    !!String(s?.favouriteManufacturer||'').trim() ||
    (Array.isArray(s?.runs)&&s.runs.length>0) ||
    (Array.isArray(s?.customEvents)&&s.customEvents.length>0) ||
    (Array.isArray(s?.backups)&&s.backups.length>0)
  );
  if(established){state.onboarded=true;rhSave();}
}
if(state&&!state.onboarded){window.rhStartOnboardingIfNeeded?.();}else{show('home');}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-rhguide-v6134.js',{updateViaCache:'none'}).catch(()=>{}));}
