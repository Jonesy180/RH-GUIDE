/* RaceHub / rh-guide v5.9.1 — synchronized beta feedback fixes. */
(()=>{
  'use strict';
  const CURRENT_VERSION=document.querySelector('meta[name="racehub-version"]')?.content||'5.9.1';
  const safe=v=>typeof esc==='function'?esc(String(v??'')):String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  /* Hall of Fame back arrow: always return to the Records view and keep the Hall screen visible. */
  window.rhBackFromHallOfFame=function(){
    window.rhRecordsMode='records';
    if(typeof window.rhRenderRecords==='function')window.rhRenderRecords();
    if(typeof window.show==='function')window.show('hall');
  };
  function repairHallBack(){
    const hall=document.getElementById('hall');
    if(!hall||window.rhRecordsMode!=='hall')return;
    const button=hall.querySelector('.rhRecordsHeadV1 button');
    if(button){button.onclick=window.rhBackFromHallOfFame;button.setAttribute('onclick','rhBackFromHallOfFame()');}
  }
  const originalRecords=window.rhRenderRecords;
  if(typeof originalRecords==='function')window.rhRenderRecords=function(){const out=originalRecords.apply(this,arguments);repairHallBack();return out;};

  /* Restore deliberate addition of newly acquired Garage cars to an active Festival Championship. */
  function festivalNewCars(run){
    if(!run||(run.type!=='festival'&&run.championshipType!=='festival'))return [];
    const existing=new Set(Array.isArray(run.entries)?run.entries:[]);
    const space=typeof rhSpace==='function'?rhSpace():null;
    return (space?.cars||[]).filter(car=>!existing.has(car.id));
  }
  window.rhAddNewCarsToFestival=function(id){
    const run=(typeof rhCurrentRuns==='function'?rhCurrentRuns():[]).find(x=>x.id===id);
    if(!run)return;
    const additions=festivalNewCars(run);
    if(!additions.length){if(typeof toast==='function')toast('No new Garage cars to add');return;}
    run.entries=[...(run.entries||[]),...additions.map(car=>car.id)];
    if(typeof rhSave==='function')rhSave();
    if(typeof toast==='function')toast(`${additions.length} new car${additions.length===1?'':'s'} added to Championship`);
    if(typeof rhOpenRun==='function')rhOpenRun(id);
  };
  function addFestivalCarAction(id){
    const run=(typeof rhCurrentRuns==='function'?rhCurrentRuns():[]).find(x=>x.id===id);
    const additions=festivalNewCars(run);
    if(!run||!additions.length)return;
    const screen=document.getElementById('festival');
    if(!screen||screen.querySelector('.rhAddFestivalCarsV5838'))return;
    const tools=screen.querySelector('.rhChamp33Tools');
    const footer=screen.querySelector('.rhChamp33Footer');
    const anchor=tools||footer;
    if(!anchor)return;
    const label=`ADD ${additions.length} NEW GARAGE CAR${additions.length===1?'':'S'} TO CHAMPIONSHIP`;
    anchor.insertAdjacentHTML(tools?'afterend':'beforebegin',`<button class="rhAddFestivalCarsV5838" onclick="rhAddNewCarsToFestival('${safe(id)}')">＋ ${label}</button>`);
  }
  const originalOpenRun=window.rhOpenRun;
  if(typeof originalOpenRun==='function')window.rhOpenRun=function(id){const out=originalOpenRun.apply(this,arguments);addFestivalCarAction(id);return out;};

  /* Automatic update notification, sharing the Settings version authority. */
  function compareVersions(a,b){
    const aa=String(a).replace(/^v/i,'').split('.').map(Number),bb=String(b).replace(/^v/i,'').split('.').map(Number);
    for(let i=0;i<Math.max(aa.length,bb.length);i++){const d=(aa[i]||0)-(bb[i]||0);if(d)return d;}
    return 0;
  }
  function closeUpdateNotice(){document.getElementById('rhUpdateAvailableV5838')?.remove();sessionStorage.setItem(`rh-update-later-${CURRENT_VERSION}`,'1');}
  window.rhCloseUpdateNoticeV5838=closeUpdateNotice;
  window.rhApplyUpdateV5838=async function(){
    const button=document.querySelector('#rhUpdateAvailableV5838 .rhUpdateNowV5838');if(button)button.disabled=true;
    try{
      const registration=await navigator.serviceWorker?.getRegistration();
      if(registration){await registration.update();if(registration.waiting)registration.waiting.postMessage({type:'SKIP_WAITING'});}
    }catch(_){ }
    location.reload();
  };
  function showUpdateNotice(latest){
    if(document.getElementById('rhUpdateAvailableV5838'))return;
    document.body.insertAdjacentHTML('beforeend',`<div id="rhUpdateAvailableV5838" class="rhUpdateOverlayV5838"><section class="rhUpdateModalV5838" role="dialog" aria-modal="true" aria-labelledby="rhUpdateTitleV5838"><small>NEW VERSION AVAILABLE</small><h2 id="rhUpdateTitleV5838">UPDATE TO v${safe(latest)}</h2><p>A newer rh-guide build is ready with the latest fixes and improvements.</p><div class="rhUpdateVersionsV5838"><span>INSTALLED <b>v${safe(CURRENT_VERSION)}</b></span><span>LATEST <b>v${safe(latest)}</b></span></div><div class="rhUpdateActionsV5838"><button onclick="rhCloseUpdateNoticeV5838()">LATER</button><button class="rhUpdateNowV5838" onclick="rhApplyUpdateV5838()">UPDATE NOW</button></div></section></div>`);
  }
  async function checkAutomaticUpdate(){
    if(sessionStorage.getItem(`rh-update-later-${CURRENT_VERSION}`))return;
    try{
      const response=await fetch(`./index.html?automatic-update=${Date.now()}`,{cache:'no-store',headers:{'Cache-Control':'no-cache'}});
      if(!response.ok)return;
      const html=await response.text();
      const latest=html.match(/name=["']racehub-version["']\s+content=["']([^"']+)/i)?.[1];
      if(latest&&compareVersions(latest,CURRENT_VERSION)>0)showUpdateNotice(latest);
    }catch(_){ }
  }
  setTimeout(checkAutomaticUpdate,1800);
  setTimeout(repairHallBack,0);
})();
