# Kot Diji Fort (Fort Ahmadabad): fort-fidelity pass (batch Z)

Date of pass: 2026-11-14. Branch `fort-fidelity`. Trace: `data/traces/kot-diji.trace.json` (auto-T1, `tools/build-t1.mjs`). No hand level.

**Method and limit.** Text sources were read through WebSearch/WebFetch. The sandbox could not reach OSM, Overpass, Wikimedia, Archnet or the plan hosts, so no plan or photograph was registered and nothing here reaches T2. Some pages reached us only as summaries from the fetch tool.

## Identity
Ledger: fort, Sindh, Pakistan, confidence high, Wikidata Q6433738.

## Documented (text sources)

| Fact | Source | Strength |
|---|---|---|
| Built 1785-1795 (infobox: 1795) by Mir Sohrab Khan Talpur; formal name Fort Ahmadabad. | Wikipedia, Kot Diji Fort (citing Tribune 2015, Dawn 2015, The Nation 2017, Pakistan Today 2012) | secondary; the page uses both dates |
| Stands on a hill about 110 ft (33.5 m) high at the southern end of the Rohri Hills; walls about 30 ft (9 m) high around the upper hill; perimeter about 1.8 km; three towers about 50 ft (15 m) high. | same | secondary |
| Features listed: cannon emplacements, inner passages, a water reservoir, munition storage, a prison, a courtroom, cells and a small royal residence. Positions, gate count and gate design are not given. | same | secondary |
| Terrain check: the DEM relief across the window is 48-86 m (about 38 m), consistent with a hill of the stated height. | Terrarium z15 | derived; consistent, not a measurement of the hill |

## Inferred (flagged, not drawn as fact)

- OSM way 478535210 is tagged building=yes with the name "Kot Diji Fort" and Wikidata Q6433738. Its computed perimeter is 1,770 m, within 2% of the 1.8 km in the text, so it is treated as the fort footprint. **That match is evidence it is the fort, not a survey of the wall line.**

## What the trace contains

- Tier **T1**, status **outline-only**, window 776 x 776 m centred on 27.345472, 68.706683.
- Terrain: Terrarium z15 grid, 47.79 to 86.31 m, source resolution about 30 m (no terraces, ditches or scarps).
- Elements: {'outline': 1, 'road': 41}.
- Builder note: site: osm:way/478535210 historic=(none; chosen by siteWay) Q6433738 59 m from ledger point
- Builder note: origin moved 59 m from the ledger point to the outline centroid
- `outline` (outline) osm:way/478535210 Kot Diji Fort: 307 x 476 m, ev mapped, conf 0.65. OSM tags this way building=yes, name=Kot Diji Fort, not historic=*; promoted to the site outline by the siteWay build option

Nothing is drawn that is not in the list above: no gate, bastion, wall height or building is placed without a plan position or sourced height.

## Evidence still missing

- Gate positions and design, tower positions, building footprints, any plan or aerial. Wall height 30 ft is from press text, so it is not drawn as a measured height.

## Sources

- [Wikipedia, Kot Diji Fort](https://en.wikipedia.org/wiki/Kot_Diji_Fort)
- [Sindh Antiquities page, not opened](https://antiquities.sindhculture.gov.pk/tour/fort-of-kotdiji-district-khairpur/)
- [Dawn, Preserving Kotdiji Fort, not opened](https://www.dawn.com/news/1316767/preserving-kotdiji-fort)
- OpenStreetMap contributors (ODbL) and Terrarium elevation tiles (Mapzen / AWS Open Data), credited per `data/geometry/<id>/meta.json`
