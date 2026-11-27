# Masada, Israel: research pass

Ledger id `masada-q186312`. Pass date 2026-11-27. Curation: `tools/trace/curation/masada-q186312.mjs`. Result: tier T1 (OSM plateau outline and mapped footprints, DEM) plus a constructed (schematic) layer written from UNESCO's nomination dossier, the New Encyclopedia of Archaeological Excavations entry, Josephus and other written descriptions. No Yadin or Netzer plan was opened.

## What was found

| id | Source | Used for | Notes |
|---|---|---|---|
| MAS-UNESCO | UNESCO World Heritage nomination dossier, whc.unesco.org/document/151594 | casemate wall 1290 m, ~70 rooms, 27 towers, 6.5 m average thickness (1.4 m outer, 0.95 m inner wall), three gates; storerooms (18 rooms, 13 of 26 m); cisterns (4 x 4,000 m3 and 8 x 3,000 m3); camps | Best single source. Read through the fetch tool's summary, not page by page. |
| MAS-NEAEHL | New Encyclopedia of Archaeological Excavations in the Holy Land, "Masada" (library.biblicalarchaeology.org) | northern complex entrances, cisterns 1901/1904, ramp ends ~13 m below the top and "never operational", Water Gate ~80 m SW of the Northern Palace | Excerpt only; no casemate wall length. |
| MAS-WIKI | en.wikipedia.org/wiki/Masada | plateau 550 x 270 m, casemate 4 m high and 1,300 m long, building phases 35 / 25 / 15 BC, ramp 114 m, siege 73 (or 73/74) CE | Dates and rounded numbers only. |
| MAS-ENCY | encyclopedia.com "Masada" | wall ~1,400 m, ~70 rooms, 30 towers, four gates; Northern Palace middle terrace ~20 m below upper, lower ~15 m below middle; Western Palace ~4,000 m2 | Older figures; differ from UNESCO. |
| MAS-JVL | jewishvirtuallibrary.org "Masada: Desert Fortress" | synagogue 12.5 x 10.5 m; large bathhouse; small bath on the lowest terrace | |
| MAS-JOS | Josephus, Jewish War 7.280-7.319 (Whiston, lexundria.com) | wall 7 furlongs, 12 cubits high, 8 broad, 38 towers of 50 cubits; palace at the western ascent with 60-cubit corner towers; bank 200 cubits, platform 50 cubits, tower 60 cubits, ram | Literary; several figures are not borne out by the remains. |
| MAS-LIB | "The Library of King Herod in the Northern Palace of Masada", Scripta Classica Israelica | middle terrace: podium 17 x 17 m, circular structure 15.3 m outer and 8 m inner foundation circles, wall of niches 5.3 x 3.2 m | |
| MAS-TRI | Herodian triclinia article (ejournals.eu) | lower terrace banqueting room 10.3 x 9.0 m | |
| MAS-SYN | Madain Project "Masada Synagogue" | synagogue ~12 x 15 m, genizah chamber 5.7 x 3.5 m, in the casemate wall on the north-west | Internally inconsistent on date and orientation. |
| MAS-CAM | "Roman siege system of Masada: a 3D computerized analysis of a conflict landscape" (Cambridge, 2024) | 8 camps (A-H), circumvallation ~4,290 m, ~2 m wide, 2-2.5 m high, 15 towers about 3.5 m | Heights are estimates in the paper. |
| MAS-BAS | Biblical Archaeology Society, "The Masada Siege" | Leuke spur ramp, 15 siege-wall towers, 8 camps | |
| OSM | way 32231475 (plateau), plus ~100 mapped ways and nodes in `data/geometry/masada-q186312/osm.json` | every documented position | The auto trace (window 400 m) did not classify the Western Palace, small palaces, Tanners' Tower, columbarium, church, pools, camps or the Byzantine Western Gate; the curation reads them from the raw geometry. |
| Yadin | Y. Yadin, *Masada: Herod's Fortress and the Zealots' Last Stand* (1966); Masada I-VI (1989-99) | classic plans | Not open here; no plan search result file exists in `data/plans/search/`. T2 needs a registered Yadin or Netzer plan. |

## Documented (mapped) vs inferred

Documented: OSM only. The plateau polygon (about 550 x 270 m at its widest, perimeter about 1,490 m); the Northern Palace outline and its walls (a round pavilion ring on the middle terrace about 8 m across, an arc on the upper terrace, a stair path on the west); the T-shaped storeroom footprint; the large bathhouse; the synagogue and its genizah; two administration buildings; the barracks; an inner tower; the Western Palace (about 46 x 71 m), three small palaces, Tanners' Tower, the round columbarium tower, the Byzantine church, the public immersion pool, the large pool at the south end; the Byzantine Western Gate (node); Roman camps E, F and G and stretches of the siege wall; the Snake Path top and the modern ramp path; the Zealots' grave memorial. No heights.

Corrections made while reading OSM:
- OSM way 125362964 is the upper station of the modern cable car (`aerialway=station`), not a historic building; it is drawn in the present-day era only and named so.
- OSM labels way 751256402 "grand residence" in English; the Hebrew name is "residence of the mountain commander". The scene uses the commander's residence name.
- The OSM outer ring on the middle terrace (about 11 m) does not match MAS-LIB's 15.3 m outer circle; the mapped inner ring (about 8 m) matches the 8 m inner circle. The mapped ring is left as mapped.

Inferred / assumed (constructed layer, every element named "schematic" with a basis and an assumed height rule):
- Casemate wall: drawn on the plateau polygon closed across the northern neck (inset 1.0 m for the 1.4 m outer face, 6.3 m for the 0.95 m inner face), 4 m high (MAS-WIKI; Josephus's 12 cubits is about 5.3 m: they differ). The drawn ring is about 1,500 m, longer than the 1290 m reported, because the real wall cuts corners on the cliff edge.
- 25 towers (27 minus two skipped beside gates) evenly spaced, 8 x 6 m, 8 m high. Josephus's 38 towers of 50 cubits (22 m) is not supported by the remains and is not drawn.
- Gates: Snake Path (east), Water (north-west), Western (at the mapped Byzantine gate node), Southern (tip). Positions beyond the Western Gate are assumed.
- Northern Palace: upper residence, balcony arc, middle terrace podium (17 x 17 m) and round pavilion, library niche wall, lower banqueting hall and small bath. The three levels are drawn on one DEM surface because the 30 m DEM cannot show the 20 m and 15 m drops.
- Storerooms, bathhouse, administration buildings, commander's residence, barracks, inner tower, synagogue: massings on the mapped footprints.
- Western Palace and three small palaces: massings on the mapped footprints; four 60-cubit corner towers (Josephus) not drawn.
- Roman ramp: platform 22 x 22 m, 22 m high, and a 49 m siege tower on the head of the mapped ramp path (Josephus); the bank is the DEM spur. MAS-NEAEHL thinks the ramp never worked, so this is a literary reading.
- Roman camps E, F, G and two stretches of the circumvallation: 2 m wide, 2.5 m high walls (MAS-CAM) on the mapped OSM lines.

## Not drawn, and why

- The ~70 casemate rooms and cross walls, the 18 storeroom halls: positions not in the sources read.
- Northern Palace colonnades, porticos, frescoes, bath rooms, the two cisterns beneath it.
- The slope cisterns (4 + 8) and their channels, the plateau's other mikvaot, the Zealot-era dwellings and the wooden inner wall the defenders built behind the breach (MAS-JOS 3.311-318).
- Roman camps A, B, C, D, H (east, south and north of the 780 x 1220 m window) and the circumvallation towers.
- The 400 m eastern cliff: the DEM clamps cells below -3 m, so the cliff is a 55 m slope.

## Conflicts

- Wall: 1,290 m (UNESCO) / 1,300 m (Wikipedia) / 1,400 m (encyclopedia.com) / 7 furlongs (Josephus, about 1,300 m).
- Towers: 27 (UNESCO) / ~30 (encyclopedia.com) / 38 (Josephus).
- Wall height: 4 m (Wikipedia) vs 12 cubits (Josephus).
- Ramp: 114 m high (Wikipedia, mostly a natural spur) vs a 200-cubit bank (Josephus) vs "never operational, ends 13 m below the top" (MAS-NEAEHL).
- Synagogue: Herodian origin (Madain Project, about 10 BC) with rebel conversion; the same page is inconsistent on the Jerusalem orientation.

## What is needed for T2

A registered Yadin (1966 / Masada I-VI) or Netzer plan of the plateau and a survey of the casemate wall (tower and gate positions), the Northern Palace terrace levels, and the Western Palace plan.
