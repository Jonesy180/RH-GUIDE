// rh-guide v6.0.113 — independent guide startup + service worker
state=rhLoad();
rhSync();
if(state&&!state.onboarded){window.rhStartOnboardingIfNeeded?.();}else{show('home');}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-rhguide-v6113.js',{updateViaCache:'none'}).catch(()=>{}));}
