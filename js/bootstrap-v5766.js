// RaceHub v5.1.2 — Bootstrap

state=rhLoad();rhSync();show('home');setTimeout(()=>window.rhStartOnboardingIfNeeded?.(),0);
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-v5766.js',{updateViaCache:'none'}).catch(()=>{}));}
