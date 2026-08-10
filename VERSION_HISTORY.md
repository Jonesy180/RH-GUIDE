## v6.0.26 — Stage 9D final League result alignment
- Alignment-only correction from protected v6.0.24.
- Position and Race Time boxes are level; segmented time digits are vertically centred.
- No functional changes.

## v6.0.23 — Stage 9D League standings + permanent Event history
- Adds live League standings calculated only from confirmed Event results.
- Points mode totals the frozen user-defined points table; DNF/DNS remain 0 points. Equal points remain tied.
- Total Time mode ranks classified finishes first, then lowest cumulative time; DNF/DNS add no time.
- Confirmed Events reopen as permanent locked history with direct Standings access.
- Completed Leagues show Final Standings once every official Event is confirmed.
- Applies the approved small upward alignment correction to the Stage 9C mini digital race-time display only.
- Preserves existing RaceHub result/championship systems and protected Stage 8 functionality.

## v6.0.22 — Stage 9C League mini digital timing correction
- Replaces the generic League race-time text field with the compact segmented RaceHub digital timing entry used by Advanced Timing.
- FINISH rows use segmented MM:SS.mmm entry with numeric auto-advance and corrected separator alignment.
- Total Time still requires a valid time; Points mode keeps race time optional. DNF/DNS behaviour and Review/Confirm locking are unchanged.
- Built from v6.0.21 Stage 9C; protected baseline remains v6.0.20 until phone pass.

## v6.0.21 — Stage 9C League Results + Review/Confirmation
- League Event result entry for every active driver.
- FINISH / DNF / DNS statuses. DNF/DNS contribute zero points/time.
- Total Time requires valid race time; Points mode allows optional time.
- Separate Review Classification step; results editable before confirmation.
- Confirmed Event results become locked permanent League history.
- Built from passed v6.0.20.

## v6.0.20 — Stage 9B League Events + Drivers (setup-state correction)
- Rebuilt from passed v6.0.18.
- Fixes League setup draft state: Points selector works and League name persists across rerenders.
- Adds League Event editing and active/inactive driver management.
- No League result entry/standings yet.

## v6.0.17 — Stage 8C Race Notes + Enter Result hero spacing
- Added optional result-specific Race Notes inside Advanced Timing.
- Notes persist on the individual saved result and appear on Result Summary when present.
- Shifted Enter Result title/subtitle slightly right for clearer BACK-button separation.
- Advanced Timing v6.0.16 implementation remains unchanged.

## v6.0.16 — Stage 8B lap separator alignment
Alignment-only release. Compact lap-timer colon separators are vertically centred to match the locked approved Advanced Timing artwork. No functional Advanced Timing changes.

## v6.0.15 — Stage 8B Advanced Timing corrected implementation
Built from protected v6.0.13. Adds locked compact digital lap entry, mandatory complete-lap validation, live green fastest-lap marking, automatic lap-total race time, and additive lap-detail persistence while preserving the existing result flow.

## v6.0.13 — Stage 8A Advanced Timing presentation foundation
Stage 8A presentation-only checkpoint from protected v6.0.12. Adds the default-OFF Advanced Timing preference and Enter Result discoverability/collapsed shell without lap persistence or calculations.

## v5.4.11 — Garage Manufacturer Filter Fix

A focused mobile layout fix that restores readable, horizontally scrollable manufacturer filter chips in the Garage. It prevents chip shrinking and clipping without changing Garage behaviour or stored data.

## v5.4.10 — Final Responsive Consistency Pass

A presentation-only whole-app responsive safety pass. It standardises narrow-screen spacing, prevents horizontal overflow, improves long-text wrapping, keeps overlays usable on short screens, and updates visible version references. No RaceHub logic or stored data changed.

## v5.4.8 — Mobile Garage Watermark Fix

- Increased mobile manufacturer watermark visibility in the Garage.
- Preserved card containment and text readability.
- Presentation-only update with no functional or data changes.

## v5.4.7 — Garage & Hall of Fame Grid Consistency

- Applied the compact grid rule to Garage manufacturer groups and Hall of Fame record cards.
- Preserved single-column layouts for forms, rankings, and championship browser rows.
- Added mobile containment to prevent horizontal scrolling.

## v5.4.6 — Events Screen Layout & Grid

- Events now use a responsive two-column grid on desktop and phone.
- Event cards have denser progress and record presentation.
- Long car names are safely truncated without widening the page.
- No functional or data changes.

## v5.4.5 — Dashboard & Statistics Grid Consistency

- Dashboard support cards now share a compact two-column mobile layout.
- Statistics collection and milestone cards remain two columns where readable.
- No logic or save-data changes.

## v5.4.4 — Statistics Mobile Grid Fix

- Festival Records remain two columns on phone-sized screens.
- Compact mobile sizing keeps both columns readable without sideways scrolling.
- Presentation-only update; all existing statistics logic is unchanged.

## v5.4.4 — Statistics Grid Revision

- Improved Statistics information density with responsive two-column card groups.
- Festival Records remain single-column on phones and two-column where space allows.
- Presentation-only revision with no logic changes.
- Updated app version and PWA cache.

## v5.4.2 — Statistics Polish

- Improved Statistics grouping, card clarity and scanability.
- Added stronger hierarchy for headline, performance, manufacturer, activity and milestone sections.
- Presentation-only sprint with no logic changes.
- Updated app version and PWA cache.

## v5.4.1 — Hall of Fame Card Polish

Refined the Hall of Fame into a premium trophy-room experience with improved record cards, stronger champion presentation, better spacing and consistent styling. No logic changes.

# RaceHub Version History

## v5.3.2 — UI Consistency Sprint 1

- Added unique navigation identities for Festival, Events, Garage, Leaderboard and Stats.
- Added section-specific accent colours and active-state underlines.
- Changed the Events icon from a trophy to a calendar to remove duplication with Leaderboard.
- Presentation-only release with no data or workflow changes.


## v5.3.1 — Navigation Identity
- Renamed Leaders to Leaderboard in the main navigation.
- Added a gold trophy icon and active state for Leaderboard.
- Changed Statistics to a blue rising-chart icon and active state.
- No data or workflow changes.

## v5.3.0 — Overall Leaderboard
- Introduced the full-collection Overall Leaderboard and podium.
- Combined all timed event results for each completed car.
- Added Long Jump tie-breaking, leader gaps, Championship wins and record totals.
- Kept the Overall Leaderboard read-only so it cannot be selected or raced.
- Preserved Era and Manufacturer Championship queues and workflows.

## v5.2.15 — Queue Draw Experience

New Championship queues now feel like a proper race-night draw, revealing cars one at a time with a Skip Draw option. The queue is saved before the reveal starts, while existing queues continue to open instantly.

## v5.2.14 — Persistent Championship Queues
- Separate saved queue for every Era and Manufacturer Championship.
- Queues survive reloads and clean themselves when overlapping cars are completed elsewhere.
- Random Pairs replaced by Race Night Queue.
- Dashboard Next Car and On Deck preview.
- Future whole-project standings named Overall Leaderboard.

## v5.2.13 — Random Picker Sprint 2
- Three draw modes: Single, Full Order and Pairs.
- No-repeat draw cycles with remaining-car count and manual reset.
- Animated lineup reveals and race-ready first-car action.

## v5.2.12 — Record History Sprint 2
- Added animated Record History dashboard counters.
- Added real fastest, average and Long Jump performance highlights.
- Added richer record, Championship podium and completed-car cards.
- Added performance summary and clearer colour coding.

## v5.2.12 — Record History Restore
- Restored the full **Your Racing Story** timeline and all Record History styling.
- Preserved Random Picker Sprint 1.
- Updated PWA cache.

## v5.2.10 — Random Picker Sprint 1
- Dedicated orange Random Picker identity.
- Improved reveal, selected-car presentation and event preview.
- Added Pick Again and Back to Dashboard actions.
- Updated app version and PWA cache.

## v5.2.8 — Brand Colour Refresh
- Unified RaceHub around the official cyan brand identity.
- Removed visible release labels from normal screens.
- Added official creator credits and About panel in Settings.

## v5.2.7 — Brand Identity

RaceHub receives its official visual identity: a cyan RH shield, matching wordmark, rebuilt app icons, favicon, branded header and splash screen.

## v5.2.6 — Statistics Facelift
- New mobile-first Statistics screen with progress, records, manufacturer rankings, activity and milestones.
- Settings and Record History remain accessible from Statistics.
- Updated PWA cache.

## v5.2.5 — Dashboard Mobile Compact Pass
- Compact two-column phone summary layout.
- Reduced dashboard vertical spacing and panel padding.
- Updated PWA cache.

## v5.2.4 — Hall of Fame Accents

Introduced a coordinated Hall of Fame colour system: gold for Festival Records, blue for Era Championships and green for Manufacturer Championships, with matching expanded record cards and a brighter green ACTIVE badge.

## v5.1.4 — Hall of Fame Browser

Introduced a complete Hall of Fame browser. Festival Records stay visible, while Era and Manufacturer Championships can be expanded to inspect their records without changing the active Championship. The active Championship is clearly marked and manufacturer lists are sorted by garage size.

/* RaceHub v4.2 Stable Project */
:root {
  --bg:#090011; --panel:#1a0730; --panel2:#2a0a4d; --pink:#ff2bd6; --purple:#7b2cff;
  --blue:#34d7ff; --gold:#ffd84d; --text:#fff; --muted:#c8b8e3; --danger:#ff477e;
}
*{box-sizing:border-box}
body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:radial-gradient(circle at 20% 0%,#48107b 0,#14001f 42%,#050009 100%);color:var(--text);padding-bottom:92px}
header{padding:22px 16px 8px}
.hero{border-radius:28px;padding:26px 20px;background:linear-gradient(135deg,rgba(255,43,214,.52),rgba(52,215,255,.22));box-shadow:0 18px 50px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.14)}
.kicker{letter-spacing:7px;font-weight:900;color:#f6d7ff;font-size:14px}
.title{font-size:48px;line-height:.95;font-weight:1000;margin:10px 0}
.version{display:inline-block;background:rgba(0,0,0,.35);border-radius:999px;padding:8px 14px;color:white}
main{padding:0 14px}
.screen{display:block} .hidden{display:none!important}
.card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:16px;margin:14px 0;box-shadow:0 14px 42px rgba(0,0,0,.28)}
h1,h2,h3{margin:0 0 10px} h2{font-size:30px} h3{font-size:21px}
.small{font-size:14px;color:var(--muted);line-height:1.35}
.btn,button{font:inherit;border:0;border-radius:18px;padding:13px 14px;font-weight:900;background:linear-gradient(135deg,var(--pink),var(--purple));color:white;min-height:48px}
.btn.secondary,button.secondary{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)}
.btn.danger,button.danger{background:linear-gradient(135deg,#ff477e,#9b003b)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
input,select,textarea{width:100%;font:inherit;background:#10021f;color:white;border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:13px;margin:6px 0 10px}
label{display:block;color:var(--muted);font-weight:800;margin-top:8px}
.nav{position:fixed;left:0;right:0;bottom:0;display:grid;grid-template-columns:repeat(4,1fr);background:rgba(7,0,12,.96);border-top:1px solid rgba(255,255,255,.14);z-index:10}
.nav button{background:transparent;border-radius:18px;color:#b9a7d1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:10px 2px;min-height:74px}
.nav button.active{color:white;background:rgba(255,255,255,.08)} .ico{font-size:28px}
.progress{height:10px;background:rgba(255,255,255,.1);border-radius:999px;overflow:hidden;margin:8px 0}
.bar{height:100%;background:linear-gradient(90deg,var(--pink),var(--blue));border-radius:999px}
.row{display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,.08);padding:10px 0}
.row:last-child{border-bottom:0} .grow{flex:1} .rank{font-weight:1000;color:var(--gold);min-width:28px}
.eventCard,.makeGroup,.resultBox{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.11);border-radius:18px;padding:12px;margin:10px 0}
.eventTop,.makeHead{display:flex;justify-content:space-between;align-items:center;gap:10px}
.badge{background:rgba(0,0,0,.34);border-radius:999px;padding:5px 10px;color:var(--gold);font-weight:900}
.raceDirector{background:linear-gradient(135deg,#0b78ff,#7b2cff 55%,#ff2bd6);border-radius:24px;padding:18px;margin:14px 0;border:1px solid rgba(255,255,255,.22)}
.raceDirector h2{font-size:34px}
.bigStart{font-size:22px;width:100%;margin-top:8px}
.recordBox{background:linear-gradient(135deg,#ffd84d,#ff8a00);color:#180019;border-radius:20px;padding:14px;margin:12px 0;font-weight:1000}
.empty{padding:18px;color:var(--muted);text-align:center}
.chips{display:flex;gap:8px;overflow:auto;padding:6px 0 8px} .chip{white-space:nowrap;padding:8px 10px;min-height:38px;border-radius:999px;background:rgba(255,255,255,.08)} .chip.on{background:linear-gradient(135deg,var(--pink),var(--purple));color:white}
.toast{position:fixed;left:18px;right:18px;bottom:96px;background:#111;color:white;padding:12px 14px;border-radius:16px;opacity:0;pointer-events:none;transition:.2s;z-index:99;text-align:center}
.toast.show{opacity:1}
.podium{display:grid;grid-template-columns:1fr 1.12fr 1fr;gap:8px;align-items:end} .pod{background:rgba(255,255,255,.07);border-radius:18px;padding:10px;text-align:center;min-height:82px} .pod.first{min-height:110px;border:1px solid rgba(255,216,77,.45)}

.celebrationOverlay{
  position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;
  background:radial-gradient(circle at center,rgba(255,43,214,.28),rgba(5,0,10,.92));
  padding:18px;animation:fadeIn .25s ease both;overflow:hidden
}
.celebrationCard{position:relative;z-index:202;
  width:min(520px,96vw);text-align:center;border-radius:30px;padding:22px;
  background:linear-gradient(160deg,rgba(255,255,255,.18),rgba(255,255,255,.06));
  border:1px solid rgba(255,255,255,.25);box-shadow:0 24px 80px rgba(0,0,0,.55);
  animation:popIn .45s cubic-bezier(.2,1.3,.3,1) both
}
.recordTitle{font-size:34px;font-weight:1000;color:#ffd84d;text-shadow:0 0 18px rgba(255,216,77,.75);margin:8px 0}
.recordCar{font-size:22px;font-weight:900;margin:12px 0}
.recordTime{font-size:46px;font-weight:1000;line-height:1;color:white;text-shadow:0 0 22px rgba(52,215,255,.9);margin:12px 0}
.previousRecord{background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:12px;margin:14px 0}
.confettiPiece{z-index:201;
  position:absolute;top:-20px;width:10px;height:18px;border-radius:3px;opacity:.95;
  animation:confettiFall 2.8s linear forwards
}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes popIn{0%{transform:scale(.7) rotate(-2deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}
@keyframes confettiFall{
  0%{transform:translateY(-30px) rotate(0deg)}
  100%{transform:translateY(110vh) rotate(720deg)}
}


.legacyCard{background:linear-gradient(135deg,rgba(255,216,77,.18),rgba(255,43,214,.10));border:1px solid rgba(255,216,77,.34);border-radius:20px;padding:14px;margin:12px 0}
.timelineItem{background:rgba(255,255,255,.07);border-left:4px solid var(--gold);border-radius:14px;padding:12px;margin:10px 0}
.timelineItem.old{border-left-color:rgba(255,255,255,.25)}
.legacyStat{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0}
.legacyStat div{background:rgba(255,255,255,.07);border-radius:16px;padding:10px;text-align:center}
.legacyBig{font-size:22px;font-weight:1000;color:var(--gold)}


.splash{
  position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;
  background:radial-gradient(circle at center,#4b1380,#090011 65%);
  animation:splashFade 2.2s ease forwards;
}
.splashInner{text-align:center;animation:popIn .6s ease both}
.splashLogo{font-size:64px}
.splashTitle{font-size:48px;font-weight:1000;letter-spacing:2px}
.splashSub{color:#c8b8e3;font-weight:800}
@keyframes splashFade{0%,72%{opacity:1}100%{opacity:0;visibility:hidden;pointer-events:none}}
.raceNightPanel{background:linear-gradient(135deg,rgba(52,215,255,.18),rgba(255,43,214,.14));border:1px solid rgba(255,255,255,.18);border-radius:24px;padding:16px;margin:14px 0}
.completedCar{background:linear-gradient(135deg,rgba(255,216,77,.22),rgba(255,43,214,.12));border:1px solid rgba(255,216,77,.4);border-radius:22px;padding:16px;margin:12px 0;text-align:center}


.directorOverlay{
  position:fixed;inset:0;z-index:260;background:radial-gradient(circle at center,#36105e,#08000f 68%);
  color:white;display:flex;align-items:center;justify-content:center;padding:18px;overflow:hidden;
}
.directorCard{
  width:min(560px,96vw);text-align:center;border-radius:30px;padding:24px;
  background:linear-gradient(160deg,rgba(255,255,255,.16),rgba(255,255,255,.05));
  border:1px solid rgba(255,255,255,.22);box-shadow:0 24px 80px rgba(0,0,0,.6);
  animation:popIn .35s ease both;
}
.directorTitle{font-size:42px;font-weight:1000;line-height:1;color:#ffd84d;text-shadow:0 0 20px rgba(255,216,77,.65);margin:10px 0}
.directorLine{font-size:18px;color:#c8b8e3;margin:10px 0;min-height:26px}
.directorBig{font-size:34px;font-weight:1000;margin:14px 0;text-shadow:0 0 18px rgba(52,215,255,.7)}
.slotBox{height:54px;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:18px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.12);margin:14px 0}
.slotText{font-size:24px;font-weight:1000;color:white;animation:slotPulse .12s linear infinite}
.checkList{text-align:left;display:inline-block;margin:12px auto;color:#d8cbef;line-height:1.8}
.directorActions{display:grid;grid-template-columns:1fr;gap:10px;margin-top:14px}
.skipBtn{position:absolute;right:14px;top:14px;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.15)!important}
@keyframes slotPulse{0%{transform:translateY(-2px)}100%{transform:translateY(2px)}}


.celebrationOverlay.fadeOut{animation:celebrationFadeOut .55s ease forwards}
.recordBannerMini{position:fixed;top:12px;left:12px;right:12px;z-index:210;background:linear-gradient(135deg,#ffd84d,#ff8a00);color:#180019;border-radius:18px;padding:12px;text-align:center;font-weight:1000;box-shadow:0 12px 40px rgba(0,0,0,.45);animation:miniBannerIn .25s ease both}
.recordBannerMini.fadeOut{animation:miniBannerOut .45s ease forwards}
@keyframes celebrationFadeOut{to{opacity:0;visibility:hidden;pointer-events:none}}
@keyframes miniBannerIn{from{transform:translateY(-18px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes miniBannerOut{to{transform:translateY(-18px);opacity:0;visibility:hidden}}


## v5.3.3 — UI Consistency Sprint 2: Page Headers
- Standardised page identity headers across all five main navigation screens.
- Added section-specific subtitles and matching accent colours.
- No functional or stored-data changes.

## v5.3.4 — UI Consistency Sprint 3: Card System
- Added shared card design tokens and standardised card spacing, radius, borders and shadows.
- Unified primary and compact card structures across the app while retaining feature-specific colours.
- Added responsive card sizing for narrow screens.
- No functional or stored-data changes.

## v5.3.5 — UI Consistency Sprint 4: Button System

- Introduced the shared RaceHub button system.
- Centred full-size primary actions throughout the app.
- Standardised primary, secondary, warning and danger hierarchy.
- Standardised button dimensions, spacing, feedback and mobile behaviour.
- Preserved compact chips and navigation controls for dense layouts.
- No competition data or workflow logic changed.

## v5.3.6 — UI Consistency Sprint 5: Micro Polish

A presentation-only refinement pass covering spacing, typography, progress indicators, toast feedback, empty states, focus visibility and mobile safe-area behaviour. No RaceHub logic or stored data was changed.

## v5.5.0 — Dashboard HQ
- Added genuine RaceHub Dashboard/Home as the app landing screen.
- Added locked RaceHub HQ background artwork.
- Added approved RaceHub logo treatment to Dashboard and loading screen.
- Dashboard links to Festival, Events, Garage, Records and Stats, with Settings as a secondary control.
- Existing bottom navigation remains on legacy screens during the page-by-page revamp.
- Updated visible loading-screen version and service-worker cache for phone deployment verification.


## v5.5.2 — Festival
- Rebuilt Festival as the dedicated RaceHub-generated Championship area.
- Added locked nighttime Festival/paddock background artwork.
- Added Home navigation back to the new Dashboard and removed the legacy bottom navigation from Festival.
- Added Continue Racing, Favourite Manufacturer, Era Championships and Manufacturer Championships sections.
- Era and Manufacturer sections use compact coded UI icons; Manufacturer Championships are searchable and collapsible.
- No manufacturer logos are used in the new Festival interface.
- Updated visible loading-screen version and service-worker cache for phone deployment verification.


## v5.5.4 — Events Legacy Header Removal
- Hid the legacy global RaceHub header and bottom navigation on the redesigned Events screen.
- Events now uses the same Home control placement and inner-page navigation treatment as Festival.
- No Events layout or workflow redesign; this is a consistency correction only.

## v5.6.0 — Studio Final Build
- Complete locked RaceHub Studio redesign implementation layer.
- Multi-Space architecture with one global Driver Profile and Space-specific Garage, Championships, Records, Hall of Fame, Stats and Favourite Manufacturer.
- Frozen Championship runs with user-defined Rounds, entry exclusion, cumulative timing and final leaderboard.
- Festival / Events / Garage / Records / Hall of Fame / Stats / Settings rebuilt to locked Studio direction.
- Contextual ? help overlays, locked empty-state copy, RaceHub-managed Backup/Restore and current-Space racing reset.
- Final ASSET-004–007 trophy authority, locked Hubs, final logo and supplied approved backgrounds installed.
- Manufacturer logo assets removed from production package; manufacturer identity is text-only.
- Existing Garage migrates from the v5.5.4 storage key; legacy racing data is retained in migration metadata but new frozen-run racing starts clean.
## v5.6.1 — Studio Final Build / Logo Mapping Correction
- Corrected Dashboard and splash logo mapping after v5.6.0 local test exposed that the logo production-reference board had been mapped as the live logo.
- Restored the approved standalone RaceHub logo asset from the proven baseline.
- Incremented visible build/version and service-worker cache for reliable phone/PWA verification.
- No locked Studio design or functional rule changed.



## v5.6.2 — Phone Test Batch 1 Corrections
- Centred splash logo and reduced Dashboard logo dominance on phone.
- Favourite Manufacturer section always visible in Festival, with Settings action when unset.
- Championship Setup car selection is searchable, countable and scroll-contained for large Garages.
- Garage manufacturer chips constrained to a proper horizontal scroller.
- Removed duplicate empty-state Create Event action.
- Hall of Fame now has its own non-interactive presentation and correct heading.
- Removed Settings button from Stats.
- About version now uses the current build version.
- No substitute Garage/Stats artwork introduced; supplied approved assets remain authoritative.


## v5.6.3 — Garage Phone Audit Checkpoint
- Replaces the 675-car flat Garage with strict alphabetical manufacturer accordions.
- Manufacturers are collapsed by default and show car counts.
- Search filters make/model/year without changing Garage data.
- Add/Edit Car is now RaceHub-native UI; browser prompts removed from Garage.
- Delete Car uses RaceHub-native destructive confirmation.
- Restores the recovered locked Garage environment artwork.
- Preserves the existing Space-owned Garage data model.

- v5.7.66 — Android Back + Manufacturer pencil repair; v5.7.65 icon/install work preserved.


## v6.0.24 — Stage 9D League delete + phone polish
- Adds a destructive-confirmation Delete League action that removes the selected League and its stored Event history from the current RaceHub Space only.
- Nudges the compact League digital race-time display upward for balanced vertical spacing.
- Reduces the League Position entry box while preserving a comfortable phone touch target.
- No standings, result-calculation, Advanced Timing or existing RaceHub flow changes.
