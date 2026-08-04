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
