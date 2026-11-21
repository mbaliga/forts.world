# Seraya Loshad Fort

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `seraya-loshad-fort-q4416676` |
| Coordinates | 59.98806, 29.215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.98806/29.215)) |
| Wikidata | [Q4416676](https://www.wikidata.org/wiki/Q4416676) (CC0) |
| Wikidata class | fort |
| Types | fort\|historic site\|destroyed building or structure |
| Administrative area | Gora-Valday |
| Inception | 1911 |
| Designations | regional cultural heritage site in Russia\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 540-003c 2 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, marker 2, coastline 6, road 14, zone 1, building 10, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18806777 historic=fort Q4416676 258 m from ledger point
- origin moved 262 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1182,"medianInside":7,"medianOutside":15}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.98806/29.215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historic site\|destroyed building or structure; sitelinks=3; wikidata:Q4416676 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/seraya-loshad-fort-q4416676.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
