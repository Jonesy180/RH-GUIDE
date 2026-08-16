/* rh-guide v6.0.71 — align destructive reset behaviour with passed OTG! v6.0.78.
   Does not alter rh-guide storage/repository/update identity. */
(()=>{
  window.rhResetConfirm=function(){
    rhConfirm({
      title:'RESET RACING DATA?',
      copy:'Clear Championships, active/completed runs, results, Records, Hall of Fame and Stats for the current Space.',
      safeguard:'Your Garage, Space name, global Driver Profile and other Spaces will be retained.',
      confirmLabel:'RESET RACING DATA',danger:true,onConfirm:'rhResetRacingFinal()'
    });
  };
  window.rhResetRacingFinal=function(){
    const s=rhSpace(); s.runs=[]; s.customEvents=[]; rhSave(); toast('Racing data reset'); rhRenderSettings();
  };
  window.rhFullResetConfirm=function(){
    const s=rhSpace();
    const isCatalogue=s&&(s.catalogueKey==='gt7-catalogue-v1'||s.catalogueKey==='fh5-catalogue-v1');
    rhConfirm({
      title:'FULL RESET OTG!?',
      copy:isCatalogue?'Clear everything owned or recorded in this OTG! Space. The dedicated car catalogue will remain installed, but every catalogue car will return to grey / unowned.':'Clear everything in this OTG! Space including Garage, Championships, results, Records, Hall of Fame, Stats and Favourite Manufacturer.',
      detail:s.name,
      safeguard:isCatalogue?'The Space itself, its name, the dedicated catalogue, OTG! backups, your global Driver Profile and other Spaces will be retained.':'The Space itself, its name, OTG! backups, your global Driver Profile and other Spaces will be retained.',
      confirmLabel:'FULL RESET',danger:true,onConfirm:'rhFullResetFinal()'
    });
  };
  window.rhFullResetFinal=function(){
    const s=rhSpace();
    const isCatalogue=s&&(s.catalogueKey==='gt7-catalogue-v1'||s.catalogueKey==='fh5-catalogue-v1');
    s.cars=[]; s.favouriteManufacturer=''; s.runs=[]; s.customEvents=[];
    if(isCatalogue){
      s.catalogueOwned={}; delete s.catalogueReconcileSignature;
      try{if(typeof fh5OwnedSet!=='undefined')fh5OwnedSet=null}catch(e){}
    }
    state.onboarded=false;
    rhSave();
    toast(isCatalogue?'OTG! Space reset — catalogue retained, 0 cars owned; backups retained':'OTG! Space reset — backups retained');
    q('rhConfirm')?.remove();
    rhOnboardingStep(1);
  };
})();
