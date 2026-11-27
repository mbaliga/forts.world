# Edinburgh Castle: fort-fidelity pass (curation, T1 mapped + schematic constructed layer)

Date of pass: 2026-11-27. Branch `dev`. Trace: `src/levels/edinburgh-castle-q212065.trace.js` (from `data/traces/edinburgh-castle-q212065.trace.json` plus `tools/trace/curation/edinburgh-castle-q212065.mjs`). Level: `src/levels/edinburgh-castle-q212065.js` (`makeT1`).

**Status: `needs-plan`, tier T1 plus a constructed layer.** No plan, survey or dated drawing was read: `data/plans/search/` was empty and `data/geometry/edinburgh-castle-q212065/` had not arrived, so the base is the auto trace (OSM shapes, Terrarium DEM). The 1544, 1547 and 1573 drawings and the Holinshed image that the Old Edinburgh Club cites were not seen. Positions come from OSM; dates and forms come from the written record.

## Documented (written sources, read through WebSearch/WebFetch)

| Fact | Value | Source |
|---|---|---|
| St Margaret's Chapel | c.1130 (David I); nave, chancel arch, apse; oldest upstanding building | Canmore 52068; HES SM90130 |
| David's Tower | begun 1367-68 by David II (finished after his death 1371); L-plan tower house, later squared; levelled in the 1573 bombardment; stump found 1912-13, surviving "almost 15 m" in places; a visitor page says about 30 m high | HES SM90130; Old Edinburgh Club 1997; castle-site blog; worldhistory.org (weak) |
| Constable's Tower | 1375-79 by received wisdom, at the Portcullis Gate site; Old Edinburgh Club argues the round tower of the 1544/47/73 drawings at the north of the summit was the true one; HES: may survive in the round bastion now holding the Dog Cemetery; wrecked in the Lang Siege | OEC; HES SoS; Scotsman |
| Great Hall | 1509-11 over earlier vaults, south of Crown Square; hammer-beam roof | HES SM90130; OEC |
| Palace block | 15th-century fabric on the King's Great Chamber (1434-35); rebuilt 1615-17 (Sir James Murray); three storeys of apartments, four of service rooms to the west | HES; OEC |
| Wellhouse Tower | 1362, north base of the rock; main block about 38 x 30 ft, 10 ft square well wing; at least 3 storeys; ruinous by the late 17th c. | Canmore 52072 |
| Spur | angle-bastioned forework "forte of the castle hill" on Castle Hill, 1548; fragment found under the Esplanade (2010); ordered demolished 1649, removed 1650 and later, levelled 1750s; no plan or size read | HES SoS, SM90130 |
| 1540s refortification | curtain wall between David's and the Constable's Tower remodelled for guns (gunhole of 1546); Forewall Battery guns originate in the 1540s (parapet 1695); at least 25 bronze guns in 1566 | HES SoS |
| Lang Siege | May 1571 to 28 May 1573; ten days of English bombardment from 17 May 1573; David's Tower collapsed, last well lost, Constable's Tower wrecked | Scotsman |
| Half Moon Battery | 1573-1610 (1574 in the 1951 account), by Regent Morton, on and around David's Tower and old tank vaults; "massive curved wall", south breast wall 80 ft (24 m) max in four receding tiers; nine guns; parapet 1695 | Canmore 52070; HES |
| Portcullis Gate | lower part 1574 by Morton on the Constable's Tower site; upper storey 1610-1780; Argyle Tower 1886-87 (Blanc) | Canmore 52093 |
| Later buildings | Queen Anne Building 1708-13; Governor's House 1740-42; Mills Mount cart sheds 1746; Hospital Square storehouses 1753-54; New Barracks 1796-99 (six storeys); Military Prison 1840-42; Gatehouse 1886-88; War Memorial 1924-27; Foog's Gate 1680s (Slezer); Esplanade 1816-20 | HES SM90130, SoS |
| Rock | about 133 m (437 ft) above sea level, steep on all sides but the east | Canmore |

**Conflicts.** Half Moon Battery: 1574 (1951 account) against 1573-1610 (2015 survey). Constable's Tower site: Portcullis Gate (received view) against a round tower at the north of the summit (OEC) against the Dog Cemetery bastion (HES). Lang Siege: a castle-site page says a four-day siege and the Scotsman ten days of bombardment; the Scotsman is used. David's Tower height: 15 m stump against about 30 m (one visitor page). Era: the suggested c. 1540 is drawn as c. 1550 because the Spur dates from 1548.

## Mapped (OSM, ODbL)

Outline (way 4301292, 144 vertices, about 265 x 170 m), 50 wall lines, 4 retaining walls, 44 buildings (named: chapel, Great Hall, Royal Palace, Queen Anne Building, War Memorial, David's Tower ruin, Portcullis Gate and Argyle Tower, Gatehouse, New Barracks, Governor's House, Hospital, cart sheds, Military Prison, Wellhouse Tower ruin), 41 markers (Mons Meg, Fore Well, Honours, Birth Chamber, 22 gun nodes), 55 cliff lines. The Half Moon Battery's curve is mapped in wall 41299993; a circle fit gives centre about (85,-42) m, radius about 27 m. No wall height is mapped. Terrarium DEM at 10 m stride from ~30 m source: the castle reads about 90-100 m, so the rock's cliffs and the Nor Loch drop are smoothed away.

## Inferred (flagged)

- Eras 1550 and 1573 carry the present footprints of the chapel, Great Hall, palace, David's Tower stump, Wellhouse Tower and the Fore Well back, marked inferred.
- Constructed layer (all schematic, each with a basis and height rule): curtain wall on the outline (5 m), entrance opening, David's Tower (25 m) and its 1573 ruin (9 m), Constable's Tower (round, 16 m, at the Portcullis Gate site), the Spur (an arrow-head salient, 4 m, position to tens of metres), Forewall Battery (6 m, on the gun nodes), Half Moon Battery (5 m begun, 10 m finished, on the mapped curve), chapel, Great Hall, palace, Wellhouse Tower, and today's Portcullis Gate, Queen Anne Building, War Memorial, New Barracks, Governor's House, Hospital, Prison. 22 elements.

## Not drawn, and why

Foog's Gate, Mills Mount, Argyle and Dury's batteries, the Dry Ditch (possibly Cromwell's, 1650), the 16th-century earthwork and ditch beside Mills Mount, the Lang Stair, the Inner Barrier, the upper battery between the Munition House and the chapel, the Register Tower and Great Chamber tower, medieval curtain-wall towers, the Esplanade wall, St Mary's Church: no position or form was read. Gatehouse (1886-88) is left as the mapped footprint so the entrance stays open.

## What would move it to T2

A georeferenced plan (the 1544/1573 drawings, Gordon of Rothiemay 1647, a Slezer view of 1678, the ASI-equivalent HES survey), the Spur's excavated outline (2010 report), and sourced wall heights.

## Reference images

None read or compared: no open photograph was fetched. Screenshots are checked only against the written descriptions and the OSM plan (`plan-osm.png`).
