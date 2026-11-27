# Krak des Chevaliers (Qal'at al-Hosn), Syria: research pass

Ledger id `krak-des-chevaliers-q177549`. Pass date 2026-11-27. Curation: `tools/trace/curation/krak-des-chevaliers-q177549.mjs`. Result: tier T1 (OSM outer outline and inner wall line, DEM) plus a constructed (schematic) layer written from the French Ministry of Culture site; no plan or survey was opened.

## What was found

| id | Source | Used for | Notes |
|---|---|---|---|
| KRAK-MIN | French Ministry of Culture, "Crac des Chevaliers", archeologie.culture.gouv.fr/crac-chevaliers/en/ (pages: first-hospitaller-castle-12th-century, strengthening-fortifications-13th-century, final-construction-phase, great-gothic-hall, baybars-siege-1271, mamluk-refortification, baybars-alterations, sultan-qalawuns-tower, redesign-entrance-system, hammam, latrine-tower, residential-and-religious-alterations, krak-des-chevaliers-under-mamluks) | every named element and date | Read for facts only; no text or images shipped. Pages give very few dimensions and no heights. |
| KRAK-ARAMCO | "The Mountain of the Knights", Aramco World 21(3), 1970 | south wall about 80 ft (24 m) thick; vaulted passage with three bends and four gates | Journalistic. |
| KRAK-WHE | World History Encyclopedia, "Krak des Chevaliers" | siege dates; two concentric walls; moat between the walls on the south; civil-war damage "limited" | No metres. |
| OSM | way 226877188 (outer outline, 58 vertices, historic=castle, wikidata Q177549) and way 375152260 (inner wall line, 19 vertices) | the only documented geometry | Auto trace data/traces/krak-des-chevaliers-q177549.trace.json. |
| Deschamps | P. Deschamps, *Les Chateaux des Croises en Terre Sainte I: Le Crac des Chevaliers* (1934), survey plans | not read | Classic source; the plan plates are not open here, and `data/plans/search/` had no result file. T2 needs a registered Deschamps plan or an open survey. |
| Wikipedia | en.wikipedia.org/wiki/Hisn_al-Akrad | not read | The fetch was refused (permission request unanswered). |

## Documented (mapped) vs inferred

Documented: the two OSM lines, nothing else. The outer outline is about 150 x 220 m (x -63 to 86, y -113 to 110). Heights: none; the OSM inner wall carries a 2 m kerb tag.

Written facts (KRAK-MIN) used on the constructed layer, with dates:
- Oldest remains after 1160; first castle with an irregular polygonal enceinte, east main gate flanked by two quadrangular towers (murder hole, portcullis), a vaulted gallery against the inner face interrupted on the east by the chapel and the gate, a great tower (G) to the south and a latrine tower (D) to the north-west.
- New fortifications from 1202-03 after earthquakes: keep of three round towers linked by buildings (more than four levels), talus with an internal arrow-slit gallery; later the outer enceinte (round bastions, brattices), the great Gothic hall (27 x 7.5 m, portico to the east), 60 m stables, the old southern ditch turned into a large cistern (mid-13th c.).
- 1271: siege 21 February (World History) to 8 April; the blacksmith's barbican taken; mines under south, north and east towers; a tower collapsed 30 March; the south face "completely refaced"; the northern postern (Nicolas Lorgne's barbican) and the east gate sector rebuilt.
- Mamluk: south-west keep tower rebuilt after the sappers, round about 15 m across, inscription 1271; south-east gate tower semicircular about 13 m, inscriptions 1271 and 1278; Qalawun's south tower dated 684 AH (1285), 17 x 20 m, 15 m beyond the curtain; east gate tower, rebuilt, inscriptions 1301-02 and 1345, vaulted ramp; barlong towers on the east face; hammam in the south-east lists; chapel made a mosque; a palace over the hall's portico (only a portal survives).

Inferred (all on the constructed layer, each element names its basis and assumed height rule):
- Positions of every tower, gate and building, which follow the OSM lines. Two OSM features are read as known structures: the 15 x 16 m notch at the south of the outer outline (vertices 3-6) as Qalawun's tower (it matches the stated 15 m projection and 17 m width), and the northern notch (vertices 25-30) as the northern barbican. Both are guesses.
- Heights: outer curtain 9 m, inner curtain 14 m, keep towers 22 m, others 6 to 18 m, each with its rule (outer low, inner higher; four levels at about 5 m).
- Which inner-line corner is which keep tower; the hall on the west run; gallery runs and the 6 m depth; stable width.

## Conflicts and gaps

- KRAK-MIN says the keep has three round towers; Aramco says only "a three-tower keep". Agree.
- The 80 ft (24 m) south wall (Aramco) is a wall plus talus mass; it is not drawn because the cistern and talus are not placed.
- The ministry names two gate towers on the east (the quadrangular Mamluk gate tower and the semicircular south-east gate tower of 1271-78); their relation is unclear, and both are placed at assumed positions.
- The OSM outer line includes Mamluk fabric (Qalawun's tower), so the c. 1250 and 1271 documented lines are carried back marked inferred.
- Missing: any plan (Deschamps), any wall or tower height, the number and places of the round outer towers, the entrance ramp's turns, the cistern outline, the keep interior, the extent of the lists, civil-war damage (2011-2014) and any post-2014 restoration state.
- The 30 m DEM puts the east and south slopes at about 0.8 m per metre, steeper than the walkable step, so the lists and outer ring are not reachable on foot in the game (marked `unreachableOk` with this note). The real terraces and entrance ramp are not in the DEM.
