// RaceHub v5.1.2 — Bootstrap

state=load();show('home');
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker-v5725.js',{updateViaCache:'none'}).catch(()=>{}));}
