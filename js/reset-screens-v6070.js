/* OTG! v6.0.70 — from-scratch reset-screen shell around locked approved artwork. */
(()=>{
  const previousConfirm=window.rhConfirm;
  const safe=(value)=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const close=()=>{
    document.getElementById('rhConfirmOverlay')?.remove();
    document.body.classList.remove('rhReset6070Open');
  };
  window.rhCloseReset6070=close;
  window.rhRunReset6070=(code)=>{
    close();
    if(!code)return;
    try{(0,eval)(code)}catch(err){console.error('OTG! reset action failed',err)}
  };
  window.rhConfirm=function(options={}){
    const title=String(options.title||'').trim();
    const destructive=options.severity==='destructive'||options.danger===true;
    const isRacing=/^RESET RACING DATA\?$/i.test(title);
    const isFull=/^FULL RESET OTG!\?$/i.test(title);
    if(!destructive||(!isRacing&&!isFull))return previousConfirm(options);

    const space=typeof rhSpace==='function'?rhSpace():null;
    const catalogueKey=space?.catalogueKey||'';
    /* The locked Full Reset artwork is catalogue-aware. Keep the v6.0.71
       generic-space fallback rather than showing catalogue wording where no
       dedicated catalogue exists. */
    if(isFull && catalogueKey!=='gt7-catalogue-v1' && catalogueKey!=='fh5-catalogue-v1'){
      return previousConfirm(options);
    }

    document.getElementById('rhConfirmOverlay')?.remove();
    document.body.classList.add('rhReset6070Open');
    const full=isFull;
    const image=full?'assets/final/full-reset-otg-v6070.png':'assets/final/reset-racing-data-v6070.png';
    const confirmLabel=options.confirmLabel|| (full?'FULL RESET':'RESET RACING DATA');
    const cancelLabel=options.cancelLabel||'CANCEL';
    document.body.insertAdjacentHTML('beforeend',
      `<div id="rhConfirmOverlay" class="rhReset6070 ${full?'full6070':'racing6070'}" role="dialog" aria-modal="true" aria-label="${safe(title)}">
        <div class="rhReset6070Stage">
          <img class="rhReset6070Art" src="${image}" alt="">
          <button class="rhReset6070Hit rhResetBack6070" type="button" aria-label="Back" onclick="rhCloseReset6070()"></button>
          <button class="rhReset6070Hit rhResetCancel6070" type="button" aria-label="${safe(cancelLabel)}" onclick="rhCloseReset6070()"></button>
          <button class="rhReset6070Hit rhResetConfirm6070" type="button" aria-label="${safe(confirmLabel)}" onclick="rhRunReset6070(${JSON.stringify(String(options.onConfirm||''))})"></button>
        </div>
      </div>`);
    document.getElementById('rhConfirmOverlay').scrollTop=0;
  };
})();
