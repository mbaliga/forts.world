# Cinta difensiva

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cinta-difensiva-q113563841` |
| Coordinates | 37.7815, 14.59925 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.7815/14.59925)) |
| Wikidata | [Q113563841](https://www.wikidata.org/wiki/Q113563841) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Troina |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 222 elements (outline 1, marker 4, road 233, building 894, cliff 1, zone 6, wall 67, retaining-wall 70).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 0, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1118673125 historic=archaeological_site 53 m from ledger point
- pruned to the outline plus 150 m: 1276 -> 589 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 410 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 97 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.7815/14.59925) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113563841 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 222 elements); data/traces/cinta-difensiva-q113563841.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
