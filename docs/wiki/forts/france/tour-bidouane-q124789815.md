# Tour Bidouane

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-bidouane-q124789815` |
| Coordinates | 48.65067, -2.02868 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.65067/-2.02868)) |
| Wikidata | [Q124789815](https://www.wikidata.org/wiki/Q124789815) (CC0) |
| Wikidata class | fortification |
| Types | scenic viewpoint\|defensive tower |
| Administrative area | Saint-Malo |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 8, road 232, coastline 1, building 220, wall 28, zone 12, retaining-wall 29, cliff 2, water 2).

Evidence: documented 0, mapped 353, inferred 0, derived 2; heights documented 6, inferred 0, unknown 171.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/496979062 historic=fort 173 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn
- origin moved 173 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":13,"medianInside":0,"medianOutside":12.4}
- sea-1: DEM check ok {"cells":27,"medianInside":0,"medianOutside":12.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.65067/-2.02868) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; scenic viewpoint\|defensive tower; sitelinks=1; wikidata:Q124789815 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/tour-bidouane-q124789815.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
