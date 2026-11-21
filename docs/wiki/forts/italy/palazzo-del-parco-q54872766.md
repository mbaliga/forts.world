# Palazzo del Parco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-del-parco-q54872766` |
| Coordinates | 43.9072, 8.08016 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.9072/8.08016)) |
| Wikidata | [Q54872766](https://www.wikidata.org/wiki/Q54872766) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Diano Marina |
| Inception | 1900 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, road 68, coastline 1, waterway 1, water 2, building 207, wall 5).

Evidence: documented 0, mapped 285, inferred 0, derived 1; heights documented 3, inferred 0, unknown 209.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225421538 historic=castle Q54872766 3 m from ledger point
- sea-0: DEM check ok {"cells":89,"medianInside":0,"medianOutside":6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.9072/8.08016) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q54872766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/palazzo-del-parco-q54872766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
