# Torre Cabrera

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-cabrera-q3995143` |
| Coordinates | 36.78297, 14.55439 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.78297/14.55439)) |
| Wikidata | [Q3995143](https://www.wikidata.org/wiki/Q3995143) (CC0) |
| Wikidata class | fort |
| Types | fort\|tower |
| Administrative area | Ragusa |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 3, road 85, coastline 1, building 289, wall 58, zone 5, retaining-wall 3, water 1).

Evidence: documented 0, mapped 277, inferred 0, derived 1; heights documented 5, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/215059540 historic=fort Q3995143 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":140,"medianInside":0,"medianOutside":11.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.78297/14.55439) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|tower; sitelinks=4; wikidata:Q3995143 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/torre-cabrera-q3995143.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
