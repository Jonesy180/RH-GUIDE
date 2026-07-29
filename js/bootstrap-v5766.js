// RaceHub v5.1.2 — Bootstrap

state=load();show('home');
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-v5766.js',{updateViaCache:'none'}).catch(()=>{}));}
