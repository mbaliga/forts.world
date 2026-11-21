# Sindhudurg: fort-fidelity pass (batch 2, plan-traced outline)

Date of pass: 2026-11-11. Branch `fort-fidelity`. Trace: `src/levels/sindhudurg.trace.js`
(from `data/traces/sindhudurg.trace.json` plus `tools/trace/curation/sindhudurg.mjs`). Level: `src/levels/sindhudurg.js` (`makeT1` over the trace, id `sindhudurg`).
The older 487-line hand level is kept as `src/levels/sindhudurg-hand.js` (id `sindhudurg-hand`, not registered). Its own header says its outline was an estimate
("about 705 x 375 m, long axis ENE-WSW inferred from reference points"); the mapped island is about 520 x 750 m with its long axis north-south, so that outline was wrong.
Plan: `data/plans/sindhudurg/` (BnF Gallica scan via Commons, public domain, catalogue SIN-02). Registration: `data/plans/sindhudurg/registration.json`.

**Method and limit.** The Watson chart is a **hydrographic chart, not a fort plan**: the fort is about 530 native pixels across (about 1 cm on the printed sheet).
The hatched wall line was traced from a 2x enlargement and registered to the OSM island coastline by an overlap fit of the silhouette alone (IoU 0.91).
OSM maps no fort outline (only the island coast, two short wall fragments, about 20 buildings and three tracks), so the chart supplies the wall line.
Nothing on the chart gives a height, wall thickness, bastion or gate. Wikipedia gave the dimensions used in the constructed layer.

## Two layers

- **Documented layer** (eras `1667`, `1765`, `today`): OSM island coast, wall fragments, buildings and tracks (today), plus the wall line, the cavalier and six blocks from the chart.
  Everything is kerb-high; there are no invented elevations and no invented gates. The wall line is left as an open ring (first point repeated) because no opening is drawn.
- **Constructed layer** (eras `<era>~built`, labelled "constructed"): a schematic with assumed heights: a rampart 9.1 m high and 3.7 m thick (Wikipedia's 30 ft and 12 ft)
  on the chart's wall line, and one concealed gate placed on the wall at the north-east bearing, which is a **guess** (see Conflicts).

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| Wall line | hatched wall of "Sinderdroo, or Fort Augustus" | Watson chart 1765 (pub. 1774) | traced and registered, +-30 m |
| Cavalier and flag | round mark "a", radius about 14 m | same chart | +-30 m, height unknown |
| Blocks | six dark blocks (A1, A2, B3, B4, two long ranges) | same chart | +-40 m, only A1 corroborated (see below) |
| Foundation | 25 November 1664; built 1664-67 | Wikipedia | secondary |
| Chief architect | Hiroji Indulkar; about 200 Vaddera workers | Wikipedia | secondary |
| Size | 48 acres (19.4 ha); rampart about 2 miles (3 km); 30 ft high, 12 ft thick | Wikipedia (the page asks for citations) | secondary, unverified |
| Protection | ASI protected monument; inscribed 2025 within "Maratha Military Landscapes of India" | Wikipedia | secondary |
| Chart legend | A "Sinderdroo, or Fort Augustus"; a "Cavalier, & Flag on D"; B Pudendroo; C Rajacoote Fort | the chart | primary |

## Mapped (OpenStreetMap, ODbL)

Island coastline (way 19804981; 19.2 ha); fort-wall fragment (way 426199526) and a second wall fragment inside the fort (426199496); about 20 buildings; three tracks; bare-rock patches; the historic=fort node.
Padmagad's rock is outside the window. The sea is derived from the coastline with the island cut out as a hole (the island-keyhole fix made for Janjira).
Terrain is Terrarium z15 (~30 m SRTM-derived): the island reads 1-10 m.

## Registration accuracy (honest)

- Fit: 0.68 m per pixel of the enlargement (1.36 m per native pixel), rotation 269 deg (the chart is turned about 90 deg from north-up), IoU 0.913. One clear peak: the best orientation more than 30 deg away scores 0.56.
- Not in the fit: the OSM wall fragment lies 0-11 m from the traced line. The printed scale bar (1 nautical mile = about 1261 native px, 1.47 m/px) differs from the fitted 1.36 m/px by 8%.
  The traced outline encloses 19.0 ha against 19.2 ha mapped and 19.4 ha (48 acres) written.
- Blocks are weaker: the nearest OSM building is 12 m from block A1, 32-33 m from A2, B3 and B4, and 61-72 m from the two long ranges. Modern buildings need not match a 1765 chart, but only A1 is corroborated.
- Bastions, gates and the many small blocks on the chart are not traced. The traced wall line is the outline only: the chart's small bumps on the wall are too ambiguous to count as bastions.

## Inferred (flagged `inferred` in the trace)

- **Historic eras.** The 1765 chart elements and OSM lines are carried back to 1667 (98 years); the coast is marked as matching the chart in 1765. No earlier plan was found.
- **Heights.** None on the documented layer. On the constructed layer the 9.1 m wall height and 3.7 m thickness come from one uncited Wikipedia sentence and are applied uniformly.

## Not traced

The popular 42 bastions (no source gives positions), the real gate and its curved passage, the Shivrajeshwar temple and other shrines, wells and tanks, the beach, the nagarkhana, the Padmagad rock, the mainland and Malvan, about 30 small blocks and the trees on the chart.

## Conflicts

- **Gate position.** Tourism and travel pages put a concealed gomukhi main gate at the north-east corner; no plan or survey gives it. The constructed layer puts a 4 m opening on the wall at bearing 45 deg from the outline centre. It may be 100 m or more from the real gate; it is labelled schematic with confidence 0.1.
  The documented layer has no gate. Wikipedia marks its own statement about the hidden entrance as needing citation.
- **Old hand outline.** The earlier hand level assumed a 705 x 375 m island with an ENE-WSW axis; the mapped island and the chart agree with each other and disagree with that.
- **Size.** 48 acres (Wikipedia, 19.4 ha) against 19.2 ha mapped and 19.0 ha traced agree; SIN-16 notes that tourism-page dimensions conflict with the UNESCO property area, which is a different boundary (not the wall footprint).
- **"Fort Augustus" date.** The chart legend names it Fort Augustus; the date and circumstances of the British naming are not established here.

## Terrain limit

The 30 m DEM gives a flat island at 1-10 m with no resolved terraces, shoreline cliffs or ramparts; heights inside the fort are not detailed. Nothing was altered.

## Missing evidence for T2 and beyond

1. A survey-grade plan (ASI, INTACH or the UNESCO nomination maps SIN-12/13, whose licence is unknown) with bastions and gates, and a source for the real gate position.
2. Photographs or elevations (SIN-07..10 are 1930s photographs, rights reserved, link only) for wall height and gate form.
3. A finer DEM for the island.
4. A plan earlier than 1765 for the 1667 era.

## Verification (2026-11-11)

- `check_sources`: 0 errors (40 elements; 124 KB trace.js; within the 250 KB and 400-element budgets).
- `node build.mjs --min`: builds. `node tools/smoke.mjs sindhudurg`: 6 scenes (3 eras, documented and constructed), 0 failures, no unreachable places.
  Two pipeline problems were fixed on the way: the window was 200 m (it cut off the island) so a `minHalf` build option was added (450 m); and a schematic wall pushed the player's spawn onto the shore, trapping it
  (8 reachable nodes), so the spawn is now decided from the evidence layer only. Janjira and Gwalior were re-run after that change and still pass.
- Screenshots: `docs/fort-fidelity/shots/sindhudurg-{1667,1765,today}.jpg` and `sindhudurg-{1667,1765,today}-constructed.jpg`. Overview views only.
- Not verified: no independent survey was used. The traced outline was checked by overlay on the chart, not by a second reader.
