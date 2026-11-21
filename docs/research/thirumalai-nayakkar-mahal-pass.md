# Thirumalai Nayakkar Mahal, Madurai: fort-fidelity pass (batch alpha-T, mapped T1 plus schematic enclosure)

Date of pass: 2026-11-14. Branch `fort-fidelity`. Trace: `src/levels/thirumalai-nayakkar-mahal-q3536592.trace.js`
(from `data/traces/thirumalai-nayakkar-mahal-q3536592.trace.json` plus `tools/trace/curation/thirumalai-nayakkar-mahal-q3536592.mjs`). Level: `src/levels/thirumalai-nayakkar-mahal.js` (`makeT1`, id `thirumalai-nayakkar-mahal`). There was no earlier scene, so there is no `-hand` level.

**Status: `needs-plan`, tier T1.** No plan, measured drawing or dated image was found. The state's own 2010 conservation report gives written dimensions only and reproduces no drawing.
So there is no registration step and no T2. The evidence layer is the OSM outline and footprints; the constructed layer is one schematic rectangle at the report's enclosure size.

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| Completed | 1636 | Wikipedia; 2010 report | secondary; primary-ish (report is a state department publication) |
| Patron | Tirumala Nayaka, ruled 1623-59 (the report also writes 1627-59) | Wikipedia; 2010 report | conflicting by 4 years |
| Original enclosure | 900 ft east-west by 660 ft north-south (274 x 201 m), walls 40 ft (12.2 m) high, about 4-5 ft thick | 2010 report | primary, text only |
| Original extent | "four times bigger than the present one" | 2010 report; Wikipedia | both say so |
| Svargavilasam courtyard | 50 x 32 m (report); 75 x 50 m (Wikipedia) | conflicting | see below |
| Pillars | 248 counted; heights 4.15, 8.30, 12.50 m; stone supporting pillars 12 m high | 2010 report | primary, text only |
| Pillar height, Wikipedia | 25 m (82 ft) | Wikipedia | conflicts with the report by a factor of two |
| Court use | District court (Madura-Ramnad) until 1970; handed to the Archaeology Department 1971 | Wikipedia; report | agree |
| Napier restoration | 1866-72 (Wikipedia); 1858 (report, with walls cracked in 1857) | conflicting | Napier governed Madras 1866-72, so the report's year looks wrong; not resolved |
| Conservation | works 1994-98, 2002-07, Finance Commission grants | 2010 report | primary |
| "Italian architect" | local legend, not documented | Wikipedia | not used |

Report: Government of Tamil Nadu, Department of Archaeology, *Conservation Works of Thirumalai Nayakkar Mahal, Madurai* (2010), Tamil Digital Library TVA_BOK_0010642. Only the first 100,000 of about 146,000 characters of its text were read; the rest was cut off by the fetch.

## Mapped (OpenStreetMap, ODbL)

Outline way 49175978 (`historic=castle`, `castle_type=palace`, Wikidata Q3536592), about 243 x 136 m; the Paththu Thungal zone (way 1308951633); 17 building footprints, one named (Saint Mary's Cathedral Church, way 680725273); 54 roads.
Terrain: Terrarium z15 over 543 m square at 5 m stride; the ground is flat (about 145 m above sea level), so the DEM adds almost nothing.
**The OSM outline is smaller than the report's enclosure** (243 x 136 m against 274 x 201 m) and larger than a quarter of it; the "four times" figure and these two areas do not reconcile, and this pass does not try to.
The OSM footprints carry no names, so which is the dancing hall or the Svargavilasam is not stated.

## Inferred (flagged in the trace)

- **Era 1636.** The outline and the Paththu Thungal zone carried back about 390 years. Only the surviving core is shown; the rest of the original is not drawn.
- **Heights.** None. Every evidence-layer element is kerb-high. The report's pillar and wall heights are not placed on any footprint because no source says which footprint they belong to.

## Constructed layer (schematic, shown only in `1636~built` and `today~built`)

One wall, `c-enclosure`: a closed 274.3 x 201.2 m rectangle, 12.2 m high, 1.4 m thick, axis-aligned and centred on the mapped outline's bounding box. The size and height are the report's; **the position and the 1.4 m thickness are assumed**, and no gate is drawn because no source places one. Because it is sealed, St Mary's Cathedral (outside it) is flagged `unreachableOk` with a note.

## Not traced

Svargavilasam dome (32 m high in the report, 18-21 m in Wikipedia), Natakasalai, Palliyarai, the 248 pillars, and any gate, tower or garden: no plan places them.
**Evidence needed for T2:** a measured plan or aerial survey of the palace (the report mentions contour maps and enclosed drawings that its text does not reproduce); the remaining 46,000 characters of the report; an ASI or state survey plan; a dated 19th-century view or photograph under an open licence (none was found in this pass).

## Checks run

`node tools/smoke.mjs thirumalai-nayakkar-mahal`: 4 scenes, 0 failures. `node tools/check_sources.mjs`: 0 errors. Screenshots: `docs/fort-fidelity/shots/thirumalai-nayakkar-mahal-{1636,1636-constructed,today,today-constructed}.jpg`.
