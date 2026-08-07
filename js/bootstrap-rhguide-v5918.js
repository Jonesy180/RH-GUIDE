// RaceHub v5.9.18 — startup + authoritative service worker
state=rhLoad();
rhSync();
if(state&&!state.onboarded){window.rhStartOnboardingIfNeeded?.();}else{show('home');}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-rhguide-v5918.js',{updateViaCache:'none'}).catch(()=>{}));}
