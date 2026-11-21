# Forte Focardo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-focardo-q3748556` |
| Coordinates | 42.7542, 10.40975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.7542/10.40975)) |
| Wikidata | [Q3748556](https://www.wikidata.org/wiki/Q3748556) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Capoliveri |
| Inception | 1678 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, road 6, building 3, cliff 1, coastline 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119923421 historic=castle Q3748556 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":292,"medianInside":0,"medianOutside":5.5}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.7542/10.40975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3748556 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/forte-focardo-q3748556.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
