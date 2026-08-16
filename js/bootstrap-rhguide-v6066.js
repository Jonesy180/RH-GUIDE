// rh-guide v6.0.46 — startup + authoritative independent service worker
state=rhLoad();
rhSync();
if(state&&!state.onboarded){window.rhStartOnboardingIfNeeded?.();}else{show('home');}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-rhguide-v6066.js',{updateViaCache:'none'}).catch(()=>{}));}
