# Gushikawa Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gushikawa-castle-q20043998` |
| Coordinates | 26.38317, 126.75094 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.38317/126.75094)) |
| Wikidata | [Q20043998](https://www.wikidata.org/wiki/Q20043998) (CC0) |
| Wikidata class | fortification |
| Types | military base\|gusuku |
| Administrative area | Kumejima |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, road 4, coastline 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1169680273 historic=castle Q20043998 16 m from ledger point
- origin moved 18 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":62,"medianInside":1.4,"medianOutside":20.1}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.38317/126.75094) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; military base\|gusuku; sitelinks=3; wikidata:Q20043998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/gushikawa-castle-q20043998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
