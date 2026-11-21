# Roman city walls of Beauvais

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roman-city-walls-of-beauvais-q22966112` |
| Coordinates | 49.43216, 2.08308 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.43216/2.08308)) |
| Wikidata | [Q22966112](https://www.wikidata.org/wiki/Q22966112) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Beauvais |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 4, road 78, building 648, wall 11, waterway 2, water 2, zone 11).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 10, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106241222 historic=citywalls 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 648 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.43216/2.08308) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q22966112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/roman-city-walls-of-beauvais-q22966112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
