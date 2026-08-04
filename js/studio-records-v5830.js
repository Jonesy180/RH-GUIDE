(function(){
'use strict';
const q=id=>document.getElementById(id);
const safe=v=>typeof esc==='function'?esc(String(v??'')):String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const fmt=v=>typeof rhFmtTime==='function'?rhFmtTime(Number(v)||0):String(v??'—');
const raceKey=name=>String(name||'').trim().toLocaleLowerCase();
const sourceKey=(kind,name)=>`${kind}:${String(name||'').trim().toLocaleLowerCase()}`;

function collectRecords(){
  const map=new Map();
  const addSource=(source,kind)=>{
    const sourceName=String(source?.name||source?.title|| (kind==='event'?'Event':'Championship')).trim();
    (source?.results||[]).forEach(result=>{
      const raceName=String(result?.roundName||'').trim();
      const time=Number(result?.time);
      if(!raceName||!Number.isFinite(time)||time<=0)return;
      const key=raceKey(raceName);
      if(!map.has(key))map.set(key,{name:raceName,all:[],sources:new Map()});
      const race=map.get(key);
      const entry={time,carId:result.carId,date:result.date||'',sourceName,kind,sourceId:String(source?.id||'')};
      race.all.push(entry);
      const sk=sourceKey(kind,sourceName);
      const previous=race.sources.get(sk);
      if(!previous||time<previous.time)race.sources.set(sk,entry);
    });
  };
  (typeof rhCurrentRuns==='function'?rhCurrentRuns():[]).forEach(run=>addSource(run,'championship'));
  const space=typeof rhSpace==='function'?rhSpace():null;
  (space?.customEvents||[]).forEach(event=>addSource(event,'event'));
  return [...map.values()].filter(r=>r.all.length).sort((a,b)=>a.name.localeCompare(b.name,undefined,{sensitivity:'base'}));
}

function carLabel(id){
  const car=typeof carById==='function'?carById(id):null;
  return car&&typeof carName==='function'?carName(car):'Unknown car';
}

function sourceTypeLabel(kind){return kind==='event'?'EVENT RECORD':'CHAMPIONSHIP RECORD';}

function sourceRow(entry,isAllTime){
  return `<article class="rhRaceRecordRowV5830 ${isAllTime?'allTime':''}">
    <span class="rhRaceRecordMedalV5830">${isAllTime?'★':'◆'}</span>
    <div class="rhRaceRecordTextV5830">
      <small>${isAllTime?'ALL-TIME RACEHUB RECORD':sourceTypeLabel(entry.kind)}</small>
      <b>${safe(entry.sourceName)}</b>
      <em>${safe(carLabel(entry.carId))}</em>
    </div>
    <strong>${fmt(entry.time)}</strong>
  </article>`;
}

function raceCard(race){
  const allTime=race.all.slice().sort((a,b)=>a.time-b.time)[0];
  const sourceRows=[...race.sources.values()].sort((a,b)=>a.sourceName.localeCompare(b.sourceName,undefined,{sensitivity:'base'}));
  return `<details class="rhRaceRecordCardV5830">
    <summary>
      <span><b>${safe(race.name)}</b><small>${sourceRows.length} ${sourceRows.length===1?'record':'records'}</small></span>
      <strong>${fmt(allTime.time)}</strong><em>⌄</em>
    </summary>
    <div class="rhRaceRecordOpenV5830">
      ${sourceRow(allTime,true)}
      <div class="rhRaceRecordHistoryHeadV5830"><span>CHAMPIONSHIP & EVENT HISTORY</span><small>Best time for each competition on ${safe(race.name)}</small></div>
      <div class="rhRaceRecordHistoryV5830">${sourceRows.map(e=>sourceRow(e,false)).join('')}</div>
    </div>
  </details>`;
}

window.rhRenderRecords=function(){
  const target=q('hall'); if(!target)return;
  const hall=window.rhRecordsMode==='hall';
  if(hall){
    const completed=(typeof rhCurrentRuns==='function'?rhCurrentRuns():[]).filter(r=>r.status==='complete');
    target.innerHTML=`<div class="rhHofV1">${rhRecordsHeader(true)}<main class="rhRecordsBodyV1">${rhHallOfFame(completed)}</main></div>`;
    return;
  }
  const races=collectRecords();
  target.innerHTML=`<div class="rhRecordsV1 rhRecordsV5830">
    ${rhRecordsHeader(false)}
    <main class="rhRecordsBodyV1 rhRecordsBodyV5830">
      <button class="rhHallBannerV1" onclick="rhRecordsMode='hall';rhRenderRecords()"><span>★</span><div><b>HALL OF FAME</b><small>Completed Championships, their winning cars and final times.</small></div><em>VIEW HALL OF FAME ›</em></button>
      <section class="rhRecordsSectionV1 rhRaceBookV5830">
        <div class="rhRaceBookTitleV5830"><div><small>YOUR PERSONAL RECORD BOOK</small><h2>RACE & EVENT RECORDS</h2></div><span>${races.length}</span></div>
        ${races.length?races.map(raceCard).join(''):rhEmpty('NO RECORDS YET','Complete your first race and RaceHub will begin building your personal record book.','View Championships',"show('festival')")}
      </section>
      <div class="rhRecordsInfoV1"><i>i</i><p><b>ABOUT RECORDS</b>Records are organised by race or event. Each section shows the fastest time ever recorded there, followed by the best time from every Championship or Event that has raced there.</p></div>
    </main>
  </div>`;
};
})();
