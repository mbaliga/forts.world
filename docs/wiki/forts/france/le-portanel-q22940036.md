# Le Portanel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `le-portanel-q22940036` |
| Coordinates | 44.06386, 1.95142 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.06386/1.95142)) |
| Wikidata | [Q22940036](https://www.wikidata.org/wiki/Q22940036) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Cordes-sur-Ciel |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 15, road 101, zone 3, building 484, wall 12, waterway 1, retaining-wall 5).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 0, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/451035350 historic=yes 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 484 mapped (trace size budget); the rest of the town is not drawn
- origin moved 41 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.06386/1.95142) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q22940036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/le-portanel-q22940036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
