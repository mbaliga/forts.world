# Fortaleza de Santo António de Tavira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-santo-antonio-de-tavira-q10283933` |
| Coordinates | 37.12147, -7.62132 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.12147/-7.62132)) |
| Wikidata | [Q10283933](https://www.wikidata.org/wiki/Q10283933) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Tavira (Santa Maria e Santiago) |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, road 10, building 4, water 7, coastline 1, waterway 2).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173529827 historic=castle Q10283933 4 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":46,"medianInside":1,"medianOutside":2.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.12147/-7.62132) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q10283933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/fortaleza-de-santo-antonio-de-tavira-q10283933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
