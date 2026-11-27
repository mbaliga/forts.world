# Malbork Castle (Marienburg): fort-fidelity pass (world batch, T1 + schematic constructed layer)

Date of pass: 2026-11-27. Branch `dev`. Ledger id `malbork-castle-q71279` (Wikidata Q71279). Trace: `src/levels/malbork-castle-q71279.trace.js`
(from `data/traces/malbork-castle-q71279.trace.json` plus `tools/trace/curation/malbork-castle-q71279.mjs`). Level: `src/levels/malbork-castle-q71279.js`.

**Method and limit.** No plan, survey drawing or dated image was read: `data/plans/search/malbork-castle-q71279.json` and `data/geometry/malbork-castle-q71279/`
had not arrived when this pass was written, so the base is the existing auto trace (OSM ODbL, Terrarium z15). The pass read five written sources (below) and
read OSM geometry by plotting the trace. The documented layer is the mapped OSM features and nothing else; every height and every drawn High Castle wing is on the
constructed layer. T1 is the honest tier; no feature is promoted to T2.

## Two layers

- **Documented layer** (eras `1400`, `1945`, `today`): OSM outline (relation 6436433), the Middle Castle ring, the Grand Master's Palace, the named Lower Castle towers,
  Karwan, main gate and other buildings, wall lines, the Nogat and Mill Canal, memorial markers. All kerb-high (0.5 m): no OSM height tag was found on them. No gate is drawn.
  The historic eras carry the mapped line back and mark it inferred.
- **Constructed layer** (`<era>~built`): 28 mapped curtain and Zwinger wall lines raised (8 m outer, 5.5 m inner, assumed), five towers, five buildings raised on OSM
  footprints, and the High Castle drawn from written dimensions at a position derived from OSM: four wings (north wing split by a 3.7 m passage), four corner turrets,
  the bell tower, the Dansker and its arcade. Every element is `schematic`, has a basis and an assumed height with its rule.

## Documented (written sources, not placed unless stated)

| Fact | Value | Source |
|---|---|---|
| Convent house begun | 1270s, north, west and south wings first; four wings and church by about 1340 | Göttingen Handbuch of Teutonic Order sites (adw-goe.de, C 5 Marienburg) |
| Seat of the Grand Master | moved 14 Sept 1309 | zamek.malbork.pl |
| Middle Castle | built 1320-1350; Great Refectory 30 x 15 x 9 m, three pillars, in the west wing | Göttingen Handbuch |
| Grand Master's Palace | 1382-1399, at the end of the west wing; Summer Refectory 14 x 9.7 m, Winter Refectory 12 x 12 x 7.8 m | Göttingen Handbuch; medievalheritage.eu |
| High Castle | 51 x 61 m, courtyard 32 x 37 m, corner turrets 3.7 x 3.7 m, well about 18 m deep | medievalheritage.eu |
| Main (bell) tower | 11.7 x 6 m, about 66 m; also 66 m in burgenwelt.org | medievalheritage.eu; burgenwelt.org |
| Dansker | 12.6 x 13.3 m tower, passage about 60 m | medievalheritage.eu; burgenwelt.org |
| Church of St Mary | 38 m long, 14.4 m high | medievalheritage.eu; zabytek.pl |
| Moats | Middle Castle about 20 m wide, 10 m deep; High Castle about 20 m wide, 15 m deep; floodable | burgenwelt.org |
| Gates | 14 gates, 3 drawbridges and 3 portcullises on the way to the High Castle | burgenwelt.org |
| Lower Castle | about 140 x 270 m; Karwan (coach house 20 x 45 m, 1300-1320), foundry, brewery, St Lawrence chapel 1358; Maslankowa Tower 8.7 m, under 29 m, walls 2.6 m; Thesaurarius Tower side 11.5 m; Vogt Tower side 7.1 m | medievalheritage.eu; zamek.malbork.pl; Göttingen Handbuch |
| Wall rings | four built over about 150 years, the last under Konrad von Erlichshausen 1441-1449; Plauen's rampart 1411-1413, brick with six towers 1441-1448 | Göttingen Handbuch; medievalheritage.eu |
| Whole site | about 21 ha, roughly 600 x 250 m, 10-15 m above the Nogat | medievalheritage.eu |
| 1945 | destroyed: eastern parts of the upper and middle wards, the main tower, the castle church; or: church chancel and Mary figure, main tower, one wing of the Middle Castle | medievalheritage.eu; zabytek.pl |

## Mapped (OpenStreetMap, ODbL)

Outline relation 6436433; the Middle Castle (way 122122611, 190 vertices); the Palace (261512837); Bridge Towers (122122616, 122122623); tower above the bakery
(122122626); New Tower (432786364); Dietrich's Tower (699998152); Karwan (62144160); main gate (62144157); mill, foundry, under-starost's house, gardener's house;
the Sperlinek Tower ruin zone; the old Order cemetery zone; 40 wall lines; the Nogat and Mill Canal; memorial nodes (Steinbrecht 1882-1922, four Grand Masters,
Copernicus, three cannons). The High Castle is not mapped as a footprint.

## Inferred (flagged)

- **High Castle position and orientation.** Placed on the courtyard footway loop (ways 415/416, a 35 x 29 m ring whose long sides run at 54 degrees) and the well
  (way 397); centre (29.7, -67.6) m from the origin. The loop is read as the courtyard path; if it is instead a path round the outside, the castle is off by up to about 10 m.
  The 61 m axis is put along the loop's long axis, toward the Middle Castle. The mapped south-east wall runs at the same angle.
- **Dansker position.** Taken at the south-west corner, 46 m of passage and the tower to the west, toward the Nogat. Direction is assumed; it ends just inside the mapped river-side wall.
- **Heights.** None sourced except the bell tower (66 m, written) and the church (14.4 m, not drawn separately). Wings 20 m, Middle Castle 15 m, Palace 20 m, curtain 8 m / 5.5 m, towers 12-16 m: assumptions.
- **Dating of the mapped towers, gate, mill and houses.** Not read; they are drawn only in 1945 and today.
- **1400 wall circuit.** The mapped line is carried back; it mixes work of about 1300 to 1449 and later.

## Not drawn (and why)

- Moats and drawbridges: widths and depths are written, but no mapped moat exists and the mapped Zwinger walls leave 12-30 m beside the High Castle, which does not match a 20 m moat on every side; any drawn ditch would be a guess.
- Church of St Mary and chapel of St Anne (north wing of the High Castle), the Pfaffenturm, Maslankowa, Thesaurarius and Vogt towers, Plauen's six towers, the Palace oriels, the Bridge Gate bridge and the 14 gates: named in sources, no position read.
- Wings of the Middle Castle: the OSM ring cannot be split.
- 1945 damage extent: only the bell tower (removed) and the High Castle east wing (an 8 m stump, assumed) are drawn; the Middle Castle east wing and church chancel cannot be separated from mapped footprints.
- Swedish earthworks of 1626-1659 (eleven bastions): not mapped, not drawn.
- Roads, houses and walls beyond about 285 m or outside the castle area were dropped from the trace for the size budget (359 to 179 elements).

## Conflicts

- **Damage in 1945:** "over half destroyed" (warhistoryonline) against named parts (medievalheritage.eu, zabytek.pl). The sources are summaries; none gives a footprint.
- **Siege of 1410:** about six weeks (warhistoryonline), almost two months (medievalheritage.eu).
- **Length and width:** about 800 x 220 m today, 1,200 x 250 m originally (burgenwelt.org); about 600 x 250 m (medievalheritage.eu); nearly 700 m long (zabytek.pl).
- **High Castle dates:** 1276-1280 and 1331-1344 (zabytek.pl) against 1270s to about 1340 (Göttingen Handbuch).
- **Refectory capacity:** 400 (burgenwelt.org) against 500 guests (zabytek.pl).

## What would raise the tier

A measured plan or survey of the High Castle and the wall rings (the Order's castle has detailed published surveys, for example Steinbrecht's), a Commons plan registered to OSM,
and an OSM footprint for the High Castle. With a plan, the six towers, the moat lines and the gates could be placed and T2 reached.

## Sources read

- zamek.malbork.pl/?p=697 (Years 1280-1457), zabytek.pl (Malbork castle complex), medievalheritage.eu (Malbork Teutonic Castle), warhistoryonline.com (History of Malbork Castle),
  Göttingen Handbuch der Burgen und Schlösser (adw-goe.de, C 5 Marienburg), burgenwelt.org (Malbork object page).
- Wikipedia (the English article) was not readable in this run (fetch refused), so no figure here comes from it.
