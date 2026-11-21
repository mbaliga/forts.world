# Tsarevokokshaysk Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tsarevokokshaysk-kremlin-q124743951` |
| Coordinates | 56.63722, 47.903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.63722/47.903)) |
| Wikidata | [Q124743951](https://www.wikidata.org/wiki/Q124743951) (CC0) |
| Wikidata class | fort |
| Types | fortress\|kremlin |
| Administrative area | Yoshkar-Ola |
| Inception | 1584 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 10, road 177, building 85, wall 12, waterway 1, zone 27).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 57, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31796587 historic=castle 144 m from ledger point
- origin moved 141 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.63722/47.903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|kremlin; sitelinks=2; wikidata:Q124743951 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/tsarevokokshaysk-kremlin-q124743951.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
