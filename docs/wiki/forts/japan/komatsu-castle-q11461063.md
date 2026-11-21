# Komatsu Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `komatsu-castle-q11461063` |
| Coordinates | 36.41262, 136.44346 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.41262/136.44346)) |
| Wikidata | [Q11461063](https://www.wikidata.org/wiki/Q11461063) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Komatsu |
| Inception | 1576 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, waterway 1, road 35).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241745424 historic=castle 9 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.41262/136.44346) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=3; wikidata:Q11461063 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 37 elements); data/traces/komatsu-castle-q11461063.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
