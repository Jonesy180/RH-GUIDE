## v8.0.10 GUIDE — Total Time Groups

- Added the fully tested V8 Total Time Groups Festival format to Guide.
- Rolling Stage 1 groups, target 8 cars, Top 2 advance, run-by-car flow and live track leaderboards.
- Hidden cumulative group standings until completion, fresh track setup for later stages / Final, record notifications and correct Groups champion honours.
- Includes the Festival entry-list scroll-jump fix.
- Preserves Guide-only storage and cache isolation. No Main data and no Main-only Delete Record tool.

## v7.0.32 — Universal Smart Bars
- All OTG! smart suggestion bars now show one best-fit suggestion only.
- Smart suggestion bars are positioned above their text inputs for phone-keyboard safety.
- Favourite Manufacturer onboarding now uses the same compact shared smart-bar behaviour instead of a multi-result tile list.
- Numeric/time inputs remain excluded.

## v7.0.31 GUIDE — Storage isolation fix
- Guide now uses a completely separate persistent data namespace from Main OTG!.
- Guide no longer reads or migrates Main OTG! local storage.
- Main data is untouched.

## Guide v7.0.30 FINAL
- Built from passed Main v7.0.30.
- Includes all user-facing v7 features and QA fixes.
- Main-only Delete Record developer control removed.

## v7.0.30 — Pick My Drive dashboard exit
- Added a visible Back to Dashboard control to the Pick My Drive selection screen at the owning source renderer.
- No other Pick My Drive behaviour changed.

# v7.0.29 — QA source fixes

- Race Off History cards rebuilt for readable full-width champion/entrant information.
- Completed Race Off detail now has a red Delete Race Off action with in-app destructive confirmation.
- Race Setup delete now uses OTG!'s in-app destructive confirmation instead of the browser confirm dialog.
- Abandoning Pick My Drive now returns to Pick My Drive instead of Festival.
- No artwork changes. No post-render/CSS hiding patches; behaviour changes are in the owning source handlers.

## v7.0.28 — Global Smart Text Input
- Enabled phone predictive text/autocorrect/spellcheck on free-text inputs and textareas.
- Numeric, time, result, year, lap and position fields remain excluded.
- Applies automatically to dynamically-created modals and editors.

## v7.0.24 — Pick My Drive final navigation source fix
- Fixed Pick My Drive completion “VIEW FINAL LEADERBOARD” to open the live Final Standings authority directly.
- Fixed Final Standings Back controls for Pick My Drive to return to Pick My Drive instead of Festival.
- Final Standings now uses the approved Pick My Drive trophy and champion label.

## v7.0.22 — Pick My Drive source routing fix
- Pick My Drive is excluded at the source from the legacy Festival add-new-cars action.
- Live-run footer returns to Pick My Drive instead of Festival.
- Uses persistent pick-my-drive identity as well as the runtime flag.

## v7.0.20 — Canonical version + Pick My Drive live-run repair
- Resets the active Main build version to one canonical 7.0.20 identity across index/bootstrap/service worker.
- Cache-busts the live Championship renderer so Pick My Drive wording and locked entrant controls cannot fall back to an older cached renderer.
- Preserves the approved Pick My Drive trophy/completion work from v7.0.18.
- v7.0.19 is superseded and should not be installed.

## v7.0.18 — Pick My Drive completion pass
- Pick My Drive race screens now use Pick My Drive wording instead of Festival wording.
- OTG!-picked entrants stay locked: no add-Garage-cars, Random Pick or Shuffle Queue controls.
- Added approved Pick My Drive trophy for completion and Hall of Fame.
- Pick My Drive records retain the PICK MY DRIVE source tag; Journey gains a first Pick My Drive champion milestone.


## v7.0.17 — Pick My Drive foundation
- Activated the locked Pick My Drive dashboard tile.
- Added OTG!-generated Garage categories using owned manufacturer, era, class/type, Vintage/Classic and Garage Mix groups.
- Added Choose Again and locked-car selection screens.
- Added Pick My Drive setup with editable rounds/layouts and Race Setup loading.
- Starts through the proven Championship race engine with entrants locked by OTG!.
- Track Records now tag Pick My Drive results as PICK MY DRIVE.

## v7.0.11 — Balanced dashboard sizing
- Increased Festival and paired dashboard tile height, icon scale, text size and spacing from v7.0.10.
- Keeps the approved compact hero/logo and the passed standard Journey BACK button unchanged.
- Targets the midpoint between v7.0.9 (too large) and v7.0.10 (too small), while retaining a single-screen phone layout.
- Updated bootstrap/service-worker registration to the current v7.0.11 cache so the update is seen reliably.
## v7.0.7 — V7 Dashboard + Race Setups Integration
- Switched Main to the locked two-column v7 dashboard layout.
- Added the permanent Race Setups dashboard tile and wired it to Saved Configs.
- Added the Pick My Drive tile in its permanent position; functionality follows in Stage 4.
- Preserved all Stage 1/2 Records, Journey, Stats and Main-only Delete Record work.

## v7.0.5 — Journey visible Back button
- Fixed My OTG! Journey header/back control being hidden by the app-wide `header{display:none!important}` rule.
- Journey now uses its own visible header wrapper and explicitly resets scroll position on open.
- No other v7 Stage 2 behaviour changed.

## v7.0.4
- Journey Back button kept visible in the phone safe area.
- Records landing page now labels the track section TRACK RECORDS.
- Single-record track chevron now sits beside the record time instead of on a separate row.

## v7.0.2 — Restore Main Delete Record
- Restored the Main-only DELETE RECORD maintenance control inside the new v7 Track Records competition rows.
- v7 Track Records now honours the existing non-destructive record-book exclusions, so deleted test/bogus competition records stay deleted while original race data remains intact.
- No changes to Track Record calculation, Car History, racing results, stats, progress, or source competition data.

## v7.0.1 — Records Foundation
- Stage 1 of OTG! v7.
- Added Track Records and Car History foundation.

# v6.0.154
- Fixed Main-only DELETE RECORD so repeated/duplicate results from the same competition cannot make a deleted Record Book row reappear.

## v6.0.153
- Main-only DELETE RECORD maintenance control added to Records > Competition History.
- Record cleanup uses non-destructive exclusions; source racing data remains intact.

# v6.0.150 — Abandon Active Racing

- Added bottom Danger Zone abandon action to active Festival Championships, Custom Racing Events and Race Off tournaments.
- Abandon closes only the active competition; completed race results and achievements remain valid.
- Records/PBs sourced from an abandoned competition are labelled ABANDONED where provenance is shown.
- No record rollback or recalculation.

## v6.0.122 — Race Off Stage 7 round advancement
- Completed preliminary rounds now form the exact next-round field from straight-through cars plus winners.
- Next round opens fresh Track/Race + optional Layout setup before a new irreversible random draw.
- Advancement is persisted immediately and remains Space-specific.

## v6.0.121 — Race Off Stage 6 digital entry + racer transition fix
- Race Off now uses the established OTG! seven-segment digital result-entry UI.
- Fixed START NEXT RACER so Car 2 opens immediately without an app restart.
- No draw, pairing, persistence, or winner/elimination logic changed.

## v6.0.120 — Race Off Stage 6 start button wiring fix
- Fixed START PRELIMINARY ROUND so the saved draw opens strict match racing.
- No draw, entrant, catalogue or racing-data changes.

## v6.0.119 — Race Off Stage 6 Preliminary Match Racing
- Strict locked draw order: first drawn car races first, then second car.
- Saves each car result immediately and persists match progress.
- Completes head-to-head matches by fastest time and marks winner green / eliminated car red in the draw view.
- Resume survives app close/reopen mid-match or mid-round.
- Round advancement intentionally remains Stage 7.


## v6.0.118 — Race Off Stage 5 Preliminary Draw Engine
- Replaced bye-padding presentation with a Preliminary Round when the entrant field is not a power of two.
- One persisted random shuffle selects Preliminary racers, Straight Through cars, and pairing order.
- Draw is irreversibly saved before presentation; no redraw control exists.
- Added locked Draw Room background and compact internally scrolling MATCHES / STRAIGHT THROUGH lists.
- Strict match racing remains intentionally disabled until Stage 6.
## v6.0.115 — Race Off Stage 3 launch wiring
- Fixed Race Off catalogue cards so every category reliably opens entrant selection.
- No trophy/artwork changes in this checkpoint.

## v6.0.109 — Update discovery wiring repair
- Result Summary spray-logo polish unchanged from v6.0.108.
- Registers a real v6.0.109 service worker instead of the missing v6.0.101 path.
- Update checker now fetches the published index with a true cache-busting network request.

## v6.0.106 — Catalogue ownership persistence
- Removed obsolete FH5 fixed-676 reconciliation cap. User catalogue ticks are now authoritative and survive Garage/Festival navigation.
- No hard-coded Toyota ownership; exact immutable catalogue IDs remain the source of truth.

## v6.0.103
- Manufacturer rename now captures the exact Space, catalogue key and linked catalogue/car IDs when the manufacturer pencil is tapped.
- SAVE no longer rediscoveres catalogue identity from globals; it applies only to the captured Space and linked cars.
- Preserves Favourite Manufacturer and Manufacturer/Favourite Championship progress while preventing cross-space switching.

# OTG! v6.0.102 — Manufacturer rename modal completion repair

- Closes the blocking rename modal before applying a successful rename.
- Success feedback and catalogue refresh now occur after the page is unblocked.
- Preserves v6.0.101 current-Space isolation and Championship/Favourite rename propagation.

# OTG! v6.0.102 — Space-isolated manufacturer rename

- Manufacturer rename is pinned to the current Space ID and cannot switch or mutate another catalogue Space.
- Manufacturer and Favourite Championship runs follow the rename without losing progress.
- Renaming back to the master manufacturer removes the alias cleanly.
- Settings-stable v6.0.100 baseline preserved.

# OTG! v6.0.100 — Settings-stable catalogue polish

- Rebuilt from the proven v6.0.97 Settings-stable baseline after v6.0.98/v6.0.99 regressions.
- Keeps compact inline car edit/note controls.
- Moves catalogue manufacturer rename to the manufacturer heading using an OTG!-native modal.
- Locks Manufacturer inside individual catalogue-car Edit so catalogue grouping is changed only at manufacturer level.
- Preserves linked Garage cars, catalogue IDs, ownership and Favourite Manufacturer progress when renaming a catalogue manufacturer.
- Fits the full catalogue search placeholder: “Search manufacturer and car”.
- No changes to passed racing, records, reset, backup or catalogue ownership systems.

## v6.0.26 — Stage 9D final League result alignment
- Built from protected v6.0.24, not failed v6.0.25.
- Restores the Race Time box to exactly the same vertical line as the Position box.
- Vertically centres the segmented digital race-time digits inside the timer box.
- Keeps the finishing position in the normal RaceHub font.
- No League logic, standings, history, delete behaviour or result calculations changed.

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
- Alignment-only correction: vertically centres the colon separators in the compact Advanced Timing lap-time displays.
- No redraw, no layout change, no timing/calculation/validation/persistence changes.
- Built from the v6.0.15 candidate solely to preserve its tested working Advanced Timing implementation while correcting the approved optical alignment.

## v6.0.15 — Stage 8B Advanced Timing corrected implementation
- Built only from protected v6.0.13; rejected v6.0.14 was not used as a baseline.
- Implements the locked compact digital lap-time rows and corrected alignment.
- Advanced Timing ON requires every declared lap to have a valid non-zero MM:SS.mmm time before Save Result can proceed.
- Complete lap times auto-sum into the existing main race-time display; duplicate total-time entry is removed while Advanced Timing is active.
- Fastest valid lap is identified live; its lap label, digital time and ★ F.L. marker turn bright green. Exact equal-fastest laps are all marked.
- Optional lap detail is stored additively on the saved result without changing existing result/record/Result Accepted logic.
- Advanced Timing OFF remains the passed v6.0.13 Enter Result behaviour with the slim discoverability tile only.
- RaceHub only; rh-guide unchanged.

## v6.0.13 — Stage 8A Advanced Timing presentation foundation
- Built only from protected v6.0.12 Stage 7 Car Notes baseline.
- Adds Advanced Timing Settings toggle, default OFF.
- OFF preserves existing Enter Result and adds only the slim discoverability tile below Finish Position.
- ON removes discoverability and adds the collapsed/expand-in-place Advanced Timing presentation tile between car identity and the existing timer.
- Presentation shell only: no lap persistence, lap calculations, or changes to timer, position, save-result, Result Accepted, or downstream race flow.
- RaceHub only; rh-guide unchanged.

## v6.0.12 — Stage 7 Car Notes live overlay
- Rebuilt Stage 7 from protected v6.0.10 after rejecting v6.0.11.
- Uses the same proven rhOverlay / rhModal production structure as Edit Car.
- Car Notes opens from Edit Car, stores notes directly on that car, and Save/Cancel returns to the same car editor.
- Existing v6.0.10 Stage 6 history and all prior systems remain unchanged.

## v6.0.10 — Stage 6 Event History + permanent Final Leaderboards
- Records now preserves each Championship/Event run as its own historical competition instance instead of collapsing repeated names together.
- Completed Championship and Event history rows can reopen their original permanent Final Leaderboard directly from Records.
- Uses the existing proven Final Leaderboard renderer and the original saved run/event data; no duplicate classification store was introduced.
- Active/incomplete history remains visible for record purposes but cannot open a Final classification until complete.
- No racing workflow, Garage, Festival eligibility, Hall of Fame, Stats or artwork was redesigned.

## v6.0.9 — Stage 5 Records / Hall of Fame / Stats integration
- Makes saved Championship TYPE the single trophy identity authority for all seven Championship types.
- Fixes Class/Type, Vintage and Classic runs so Save/Start persist the correct trophy identity instead of Festival fallback.
- Hall of Fame now uses the correct trophy for all new types; Class/Type Hall of Fame entries keep the dynamic Class/Type plaque.
- Records already consumes every Championship run generically; verified no parallel Records system is required.
- Locked Stats already counts every run/result generically; verified new types are included automatically in Created, Completed, Total Races and Time Driven.
- Extends the existing final-standings trophy/Champion label mapping for the three new types so completed runs remain type-correct.
- No eligibility, racing workflow or page redesign changed.

## v6.0.8 — Stage 4 new Championship trophies
- Adds the locked Class/Type wheel trophy, Vintage trophy and Classic trophy assets.
- Trophy selection is driven by saved Championship TYPE, never custom Championship name.
- Class/Type uses a native dynamic plaque showing the actual user-defined Class/Type value.
- Vintage and Classic now use their dedicated trophy identities.
- No Championship eligibility, racing workflow, Records, Hall of Fame or Stats logic changed.

## v6.0.7 — Stage 3B Vintage + Classic Festival expansion
- Adds Vintage Championship eligibility for cars with Year <= 1949.
- Adds Classic Championship eligibility for cars with Year 1950–1990 inclusive.
- Both use the existing proven Festival Championship setup/run/results workflow and 2-car threshold.
- Missing/UNKNOWN Year values are ignored.
- Class/Type Championship behaviour from v6.0.4 remains unchanged.
- Stage 4 trophy artwork is not implemented; Vintage and Classic temporarily use the existing Festival trophy identity.

## v6.0.6 — Class/Type suggestion positioned above input
- Moves the single remembered Class/Type suggestion above the field for phone keyboard safety.
- Keeps the one-line dynamic suggestion behaviour from v6.0.5.
- No Garage data, Class/Type memory, Festival eligibility or Championship logic changed.

## v6.0.5 — Compact remembered Class/Type suggestion
- Keeps the full RaceHub remembered Class/Type memory but displays only one best suggestion at a time.
- The single suggestion changes as the user types.
- Removes the multi-row suggestion dropdown that could cover Cancel / Save Changes.
- No Festival eligibility or Championship logic changed.

## v6.0.4 — Stage 3A Class/Type Festival expansion
- Adds data-driven Class/Type Championships to the live Festival screen.
- Class/Type values come only from genuine Garage data; blank/UNKNOWN values create no Championship.
- Uses the existing proven Championship setup/run/results workflow and 2-car eligibility threshold.
- Adds Class/Type discovery when a saved Garage change crosses the eligibility threshold.
- Stage 4 trophy artwork is not implemented; Class/Type uses the existing Festival trophy identity temporarily during this staged test.
- Vintage and Classic remain unimplemented because their locked year boundaries were not recoverable; no ranges were invented.

## v6.0.3 — Stage 2 smart remembered Class/Type suggestions
- Adds an app-controlled Class/Type suggestion chooser to Add/Edit Car.
- Suggestions are learned from actual Class/Type values used in the current RaceHub Space; there are no hard-coded categories.
- Suggestions are space-specific, case-insensitive, ranked by match/use and persist in RaceHub data.
- Browser autocomplete/datalist is not used.
- No Festival expansion or new Championship type logic is included.

## v6.0.2 — Stage 1 Garage details (live production path)
- Rebuilt from protected v6.0.0 after rejecting v6.0.1.
- Changes the actual studio-final-v5808 Garage/Edit Car implementation loaded in production.
- Adds editable Class/Type, grey display-only UNKNOWN, ADD DETAILS, Cars Need Details and Garage detail rows.
- Preserves existing car IDs and proven Championship eligibility workflow.
- No Stage 2 suggestions or Festival expansion.

# RaceHub v5.9.17

- Standardise every universal top-left BACK pill to the same compact 80px width.
- Preserve the v5.9.16 Festival/Garage delete synchronisation and all existing functionality.
- No workflow/footer BACK buttons are changed.

## RaceHub v5.9.16

- Fixed active/prepared Festival Championships retaining a Garage car after that car was deleted.
- Deleted car results are removed from the Festival run at the same time.
- No BACK-button, layout, manifest, storage-identity or repository-identity changes.

## v5.9.5 — Universal BACK header layout correction
- Corrected shared header spacing so BACK never covers page titles.
- Removed remaining arrow pseudo-elements.
- Preserved universal form-memory suppression.

# v5.9.4 — Universal BACK + No Memory Lists
- Replaced every top-left navigation arrow with the shared RH-UI-026 frosted-glass BACK pill.
- Disabled browser/input remembered-value suggestion lists across forms while preserving RaceHub-controlled selection interfaces.
- Preserved app identity, storage, cache namespace and update channel separation.

# RaceHub v5.9.3

- Fixed Hall of Fame tile and back navigation.
- Restored adding newly acquired Garage cars to active Festival Championships.
- Fixed Favourite Manufacturer onboarding list scrolling.
- Corrected About RaceHub version display.
- Applied final back-arrow centring polish.
- Added automatic update notification support.

## v5.8.31 — Result Summary simplification
- Removed the redundant green Result Accepted tile from Result Summary.
- Current Classification now follows the championship/event summary directly.
- No race logic, artwork, records, Hubs, or Final Standings changes.

# RaceHub v5.4.11 — Garage Manufacturer Filter Fix

- Restores full manufacturer filter labels on phone-sized Garage screens.
- Keeps the filter bar horizontally scrollable with touch-friendly chip spacing.
- Prevents global responsive rules from shrinking or clipping manufacturer chips.
- No Garage logic, car data, or save data changed.

# RaceHub v5.4.10 — Final Responsive Consistency Pass

- Adds shared overflow protection across every RaceHub screen.
- Tightens card, heading and row spacing on narrow phones.
- Keeps dialogs and celebration panels usable on short mobile screens.
- Improves wrapping for long labels, car names, badges and controls.
- Updates the visible About version and refreshes the PWA cache.
- No application logic, calculations or save data changed.

# RaceHub v5.4.8 — Mobile Garage Watermark Fix

- Restores visible manufacturer watermarks on phone-sized Garage cards.
- Keeps watermarks behind all car text and controls.
- Contains watermark artwork within each manufacturer card without horizontal scrolling.
- No Garage logic, car data, or save data changed.

# RaceHub v5.4.7 — Garage & Hall of Fame Grid Consistency

- Garage manufacturer groups use two columns on wider screens where practical.
- Hall of Fame record cards remain two columns on phones and larger screens.
- Mobile Hall of Fame cards are denser and protect against text overflow.
- No logic, record calculations, or save data changed.

# RaceHub v5.4.6 — Events Screen Layout & Grid

- Reworked the Events screen into a compact two-column card grid.
- Kept the two-column layout on phones where the short event cards remain readable.
- Improved event progress, record and completion hierarchy.
- Removed unnecessary empty space and reduced vertical scrolling.
- Added overflow protection so the Events page never forces sideways scrolling.
- No event logic, results, calculations or save data changed.

# RaceHub v5.4.5 — Dashboard & Statistics Grid Consistency

- Uses compact two-column cards on the Dashboard where practical.
- Keeps Collection Leaders and Latest Achievements in two columns on phones.
- Prevents card content from widening the page.
- No logic or save-data changes.

# RaceHub v5.4.4 — Statistics Mobile Grid Fix

- Keeps Festival Record cards in a compact two-column grid on phones.
- Reduces mobile card spacing, icon size and typography to preserve readability.
- Prevents card content from widening the page or causing horizontal scrolling.
- Refreshes the PWA cache so mobile installations receive the corrected layout.
- No statistics, record, save-data or calculation changes.

# RaceHub v5.4.4 — Statistics Grid Revision

- Reworks Statistics card groups into two-column layouts where screen space allows.
- Keeps Festival Records in two columns on larger screens and one column on phones.
- Adds two-column Collection Leaders and Latest Achievements layouts on desktop.
- Reduces unnecessary vertical scrolling without changing any statistics or application logic.
- Updates the displayed app version and PWA cache to v5.4.4.

# RaceHub v5.4.2 — Statistics Polish

- Refines the Statistics page with clearer grouping and stronger visual hierarchy.
- Improves headline, record, manufacturer, activity and milestone cards.
- Makes key figures easier to scan on desktop and mobile.
- Keeps all statistics calculations and application logic unchanged.
- Updates the displayed app version and PWA cache to v5.4.2.

# RaceHub v5.4.1 — Hall of Fame Card Polish

- Reworks Hall of Fame record cards into a more premium trophy-room presentation.
- Improves champion hierarchy with dedicated record-holder panels and stronger result emphasis.
- Adds clearer event, scope and record-duration presentation.
- Refines section spacing, championship rows and responsive card layout.
- Preserves all existing records, calculations and Hall of Fame behaviour.
- Updates the displayed app version and PWA cache to v5.4.1.

## v5.7.66
- Repair Android/browser Back by wiring the intended RaceHub navigation handler into the live build.
- Move Manufacturer Rename to the Manufacturer header pencil icon; remove the under-list rename row.
- Preserve passed v5.7.65 PWA install and icon artwork unchanged.

## v6.0.0 — Stage 1 Garage foundation
- Starts RaceHub v6 development from the protected v5.9.18 production baseline.
- Adds a non-destructive v6 persistence/schema migration for existing RaceHub Spaces and Garage data.
- Preserves existing car IDs and Garage records so Championship/result relationships remain intact.
- Keeps the existing RaceHub storage identity and proven v5 functionality; no later v6 stages are implemented.
- Adds a unique v6.0.0 service-worker/cache authority and visible build version.

## 6.0.18 — Stage 9A League Organiser foundation
- Added League Organiser route inside Events.
- Added Space-specific League setup/persistence.
- Added user-defined Points or Total Time setup, event count and drivers.
- Uses locked League control-room/helicopter environment.
- No League result/standings logic yet.


## v6.0.24 — Stage 9D League delete + phone polish
- Adds a destructive-confirmation Delete League action that removes the selected League and its stored Event history from the current RaceHub Space only.
- Nudges the compact League digital race-time display upward for balanced vertical spacing.
- Reduces the League Position entry box while preserving a comfortable phone touch target.
- No standings, result-calculation, Advanced Timing or existing RaceHub flow changes.

## v6.0.114 — Race Off Stage 3
- Entrant selection for every Race Off category.
- Category field preselected; manufacturer group selection and individual untick supported.
- Locking creates a Space-specific frozen Race Off record with immutable entrant snapshots.
- Persistent Continue Race Off card proves save/reload behavior before draw engine work.

## v6.0.116 — Race Off Stage 4
- Race Off Round Setup using existing Event-style UI.
- Required Track / Race, optional Layout and Round Notes.
- Review Draw saves setup but does not lock/start the draw.
- Optional Layout added to existing Festival Championship and Custom Racing round setup.

- v6.0.117 — Race Off Continue card layout corrected; Stage 4 functionality unchanged.

## v6.0.123 — Race Off Stage 8: Final / Champion + draw usability
- Final completion now terminates the tournament instead of creating a bogus Round of 1.
- Added Champion confirmation, completed Race Off state, Champion screen and Race Off history access.
- Approved Race Off Champion environment is used for the Champion screen.
- In-progress draw list now automatically positions the current/next match at the top.
- Tightened Draw screen vertical spacing so the page itself needs less scrolling.

- v6.0.151: Race Off single-run record creation/celebration bridge added; existing advanced-timing exclusion preserved.

## v7.0.3 — Journey & Stats (Stage 2)
- Adds the v7 Records landing layout with Hall of Fame, My OTG! Journey and Race & Event Records.
- Adds My OTG! Journey major-first/milestone timeline derived from current Space racing history.
- Adds Biggest PB Improvement to Stats beside Time Driven.
- Keeps the v7.0.2 Main-only Delete Record tool in Race & Event Records.
- Guide intentionally not built during v7 development; final Guide follows Main sign-off.

## v7.0.6 — Race Setups
- Added per-space saved Race Setups.
- Added create/edit/delete setup screen and dashboard entry.
- Added Save/Load Race Setup controls to Championship setup.
- Matched Journey Back button more closely to standard size.

## v7.0.8
- Replaced the actual live dashboard renderer with the locked v7 dashboard.
- Race Setups is now reachable from its permanent dashboard tile.
- Pick My Drive tile is present as the Stage 4 placeholder.


## v7.0.9
- Fixed v7 dashboard startup timing: the legacy Home was rendered by bootstrap before the v7 dashboard override loaded.
- The v7 dashboard now immediately repaints Home after its renderer is installed, so the locked two-column dashboard appears on first load.
- No Race Setups, Records, Journey, Garage, Festival, Race Off, Custom Racing, Stats or Settings logic changed.


## v7.0.10 — Compact approved dashboard + Journey back polish
- Reworked live v7 dashboard to the approved compact single-screen composition.
- Removed space-name welcome overlay from dashboard hero and moved approved OTG! mark to upper-left.
- Tightened small dashboard tiles while retaining Festival prominence.
- Resized My OTG! Journey BACK control to match the standard compact back-button scale.

## v7.0.12 — Race Setup Load + Dashboard / Back Polish
- Added permanent SAVE RACE SETUP and LOAD RACE SETUP controls directly to the live Festival Championship Rounds renderer.
- Loading a saved setup replaces the current Championship round list while leaving entrants untouched.
- Increased the compact v7 dashboard body sizing by roughly 5–7% without changing the approved hero.
- Standardised v7 Race Setups BACK buttons to the compact Back size.

## v7.0.13 — Race Setup loader scope fix
- Fixed Festival Save/Load Race Setup controls resolving the active Championship setup through `window.rhSetup`; the live app keeps `rhSetup` in the shared global lexical scope.
- Festival LOAD RACE SETUP now reads the same per-space `raceSetups` collection used by the Race Setups screen, so previously saved setups appear and can populate Championship rounds.
- No dashboard, Journey, Records, or other visual changes.

## v7.0.15
- Rebuilt from known-good v7.0.13 after v7.0.14 startup failure.
- Replaced native numbered Race Setup load prompt with in-app chooser.
- Fixed Custom Racing dashboard title/chevron spacing.
- Preserved v7.0.13 startup/bootstrap behaviour.

## v7.0.24
- Stage 5 Journey/Stats finalisation: PB badge, Biggest PB Improvement, catalogue milestones, retained high-level Journey firsts.

## v7.0.27 — Stats locked one-screen composition
- Stats layout only: shortened cockpit scene, restored artwork visibility, compacted PB/Time cards and footer to fit the locked phone composition.
- No artwork replacement and no feature changes.
