// OTG! Guide v8.0.16 — Friends/GT7 line; version-pinned worker + manifest updates
state=rhLoad();
rhSync();
if(state&&!state.onboarded){window.rhStartOnboardingIfNeeded?.();}else{show('home');}
if('serviceWorker' in navigator){window.addEventListener('load',async()=>{
  try{
    await navigator.serviceWorker.register('./otg-guide-service-worker-v8016.js',{scope:'./',updateViaCache:'none'});
    setTimeout(()=>window.rhAutoCheckForUpdateGuideV8016?.(),250);
  }catch(_){ window.rhAutoCheckForUpdateGuideV8016?.(); }
});}
