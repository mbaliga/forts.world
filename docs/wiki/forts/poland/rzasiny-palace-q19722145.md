# Rząsiny Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rzasiny-palace-q19722145` |
| Coordinates | 51.08165, 15.44108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.08165/15.44108)) |
| Wikidata | [Q19722145](https://www.wikidata.org/wiki/Q19722145) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Rząsiny |
| Inception | 1800 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | REGON: 932285685, KRS: 0000054312 |
| OSM `website` | https://palacrzasiny.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, road 20, building 34, wall 3, zone 1, water 1, waterway 1).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 7, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/376431691 historic=castle Q19722145 1 m from ledger point
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.08165/15.44108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q19722145 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/rzasiny-palace-q19722145.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
