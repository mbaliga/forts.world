# Tower of London: fort-fidelity pass (world-fort batch, T1 mapped + constructed schematic layer)

Date of pass: 2026-11-27. Branch `dev`. Ledger id `tower-of-london-q62378`. Trace: `src/levels/tower-of-london-q62378.trace.js`
(from `data/traces/tower-of-london-q62378.trace.json` plus `tools/trace/curation/tower-of-london-q62378.mjs`). Level: `src/levels/tower-of-london-q62378.js`
(`makeT1` over the trace, id `tower-of-london-q62378`).

**Method and limit.** No plan, survey or dated image was read: the Commons plan search results (`data/plans/search/`) had no file for this site and
`data/geometry/tower-of-london-q62378/` had not arrived, so the curation works from the auto trace, which already holds the OSM footprints. OSM maps the
White Tower and 21 named towers (13 Inner Ward, 8 more on the Outer Ward and wall), so tower positions are good to a metre or two; wall lines between the
towers are not mapped for the Inner Ward and are drawn as chords. Nothing here is T2 (no plan fitted): the tier is T1 plus a constructed layer.

## Sources read (WebSearch, then WebFetch of returned URLs)

| Id | Source | Used for |
|---|---|---|
| HE-WT | Historic England list entry 1260258 (White Tower) | keep c.1078-1100, 3 storeys and basement, angle turrets 5 storeys, third floor early C17, Salvin 1856-7 |
| HE-OUT | Historic England list entry 1242026 (outer curtain wall and towers) | outer wall c.1275-85, Edward I, about 21,000 pounds with the new moat; south section with Cradle and Well Towers 1348-55; Develin, Legge's Mount, St Thomas's, Byward Tower dates; materials |
| HE-IN | britishlistedbuildings.co.uk/101242062 (inner curtain wall and mural towers, copy of the HE text) | Inner Ward tower dates, forms, storeys; south wall heightened 1339; Salvin 1840s-60s |
| HE-MID | Historic England list entry 1065766 (Middle Tower and causeways) | Middle Tower 1275-81, cylindrical flanking towers, rebuilt 1717-19; Lion Tower foundations |
| WH | worldhistory.org Tower of London; mondes-normands.caen.fr | White Tower 36 x 32.5 m, 27.5 m; original bailey against the Roman wall; Bell Tower; Rufus 1097 |
| LOFTIE | W. J. Loftie, Authorised Guide to the Tower of London (1904, Project Gutenberg 13436) | White Tower 90 ft floor to battlement, 107 x 118 ft, four turrets (three square, one circular); outer wall flanked by towers (a century-old text: used only for the keep) |
| HRP | hrp.org.uk moat page and 50 facts page | wet moat 1270s, at least 50 m wide, drained 1843-5; North Bastion 1848 destroyed 1940; menagerie to 1835; Mint c.1279-1810 |
| LAMAS | LAMAS vol 48 (Western London Entrance, 1240-41) | Lion Tower excavated north of the Middle Tower 1936-8; Edward I's entrance through Lion, Middle and Byward Towers 1275-80; Henry III gateway collapse 1240 |

The Wikipedia Tower of London page was refused by the sandbox (permission not granted), so no figure here is from it.

## Documented layer (eras `1100`, `1300`, `today`)

- Present-day OSM: outline (way 370870741), one closed outer wall line (509001534), the White Tower (369135772), the named tower footprints, the Ditch zone, retaining walls, Thames waterways, docks and the paths, buildings and zones around. 177 far or minor context elements (ordnance markers, distant roads and hotels) were dropped to keep the element count in budget; every tower and wall element was kept.
- Everything is kerb-high (0.5 m): no height was read from a survey. No gate is mapped, so the Outer Ward is a sealed mapped ring on the documented layer; schematic gates are cut only on the constructed layer.
- `1300` and `1100` carry the mapped footprints back, marked inferred, for the towers the sources date before the era (Cradle Tower 1348-55 only in `today`; Wardrobe Tower undated, `today` only). The White Tower footprint is marked mapped in `1100` and `1300` because the same building stands.
- The Middle Tower is not named in OSM: the unnamed footprint of two circles about 10 m apart (way near (-139, 8) m) at the end of the service road to the Byward Tower is identified with it by position and shape (HE-MID: cylindrical flanking towers). The identification is this pass's.

## Constructed (schematic) layer (`<era>~built`)

| Element | Evidence | Assumed height and rule |
|---|---|---|
| White Tower mass + 4 turrets | HE-WT, WH, LOFTIE; footprint OSM | 27.5 m (published figure); turrets 31 m (+3.5 m; HE five storeys vs three) |
| First bailey enclosure c. 1100 | WH (Roman wall S and E, bank and ditch N and W), HRP; east edge from OSM zone 608 | 3 m; west and north edges assumed +-20 m |
| Inner curtain wall (13 towers) | HE-IN dates; mapped tower footprints joined as chords | 8 m assumed; above the outer wall |
| Outer curtain wall | HE-OUT, drawn on the mapped OSM line | 6 m assumed |
| 21 towers, 1 or 2 era versions | HE texts: storeys, form, date per tower | 3.5 m x storeys + 3 m; storeys assumed 2 where not stated |
| Bloody, Byward, Traitors' Gate (St Thomas's) gates | HE: watergate / gatehouse; positions on footprints | 4-5 m openings; no gate form drawn |
| Lion Tower barbican | LAMAS, HE-MID: north of the Middle Tower; foundations only | round block r 9 m, 10 m high; position +-15 m |
| Wet moat, north, east, west strips | HRP; edges from OSM revetment walls | 2 m deep assumed |

## Conflicts and gaps

- **Well Tower date**: HE gives 1275-85 in one line and 1348-55 (south wall with Cradle Tower) in another. Drawn in c. 1300 with the conflict flagged.
- **Brass Mount**: "late C13 or early C14" straddles 1300; drawn in c. 1300, flagged.
- **Salt Tower**: HE names a "three-quarter cylindrical tower beside the postern adjoining Salt Tower", basement and two storeys, 1238-75; this pass reads that as the Salt Tower itself (3 storeys drawn) but could not confirm.
- **Rebuilt towers**: Lanthorn (1883), Constable, Brick, Flint, Bowyer, Devereux, Broad Arrow were rebuilt or refaced in the C18-C19; the footprints are today's and are carried back unchanged for c. 1300.
- **Not drawn, for lack of a plan**: Inner Ward wall true course between towers; Tower Wharf (Edward I) and the south-east Iron Gate and Develin causeway; the Great Hall and Edward's palace buildings; the Mint; the Royal Menagerie in the Lion Tower; the c. 1100 forebuilding; stairs, doors and gate forms; the Roman wall; the Thames edge in each era.
- **Missing sources**: no survey height for any wall or tower; no Commons plan was read, so a fitted T2 (the Royal Commission on Historical Monuments plan, Parnell's survey, a Salvin plan) is the next step; Wikipedia could not be read.
- **Reference photos**: not fetched in this pass; the screenshots were checked against the dates and storeys in the table and against the OSM layout, not against photographs.
