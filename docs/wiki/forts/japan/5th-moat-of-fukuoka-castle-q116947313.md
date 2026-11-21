# 5th Moat of Fukuoka Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `5th-moat-of-fukuoka-castle-q116947313` |
| Coordinates | 33.58939, 130.37994 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.58939/130.37994)) |
| Wikidata | [Q116947313](https://www.wikidata.org/wiki/Q116947313) (CC0) |
| Wikidata class | castle |
| Types | heritage site\|Japanese castle\|moat\|artificial pond |
| Administrative area | Jōnai |
| Inception | 1601 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 23, road 267, building 101, wall 1, zone 27, retaining-wall 28).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 31, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/345642780 historic=castle Q1143944 596 m from ledger point
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 604 m from the ledger point to the centre of the mapped site
- 97 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.58939/130.37994) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; heritage site\|Japanese castle\|moat\|artificial pond; sitelinks=1; wikidata:Q116947313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/5th-moat-of-fukuoka-castle-q116947313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
