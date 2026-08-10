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
