# Fort Howe

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-howe-q960026` |
| Coordinates | 45.27667, -66.07306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.27667/-66.07306)) |
| Wikidata | [Q960026](https://www.wikidata.org/wiki/Q960026) (CC0) |
| Wikidata class | fort |
| Types | blockhouse |
| Administrative area | Saint John |
| Designations | national historic site of Canada |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 7, road 216, building 244, wall 1, zone 21, cliff 5, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 308, inferred 0, derived 1; heights documented 9, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135048007 historic=fort Q960026 108 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 244 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 216 mapped (trace size budget); minor lanes are not drawn
- origin moved 107 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":14,"medianInside":0.9,"medianOutside":24.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.27667/-66.07306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse; sitelinks=3; wikidata:Q960026 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/fort-howe-q960026.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
