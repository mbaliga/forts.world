# Radzyń Chełmiński Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `radzyn-che-minski-castle-q1013618` |
| Coordinates | 53.3875, 18.94444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.3875/18.94444)) |
| Wikidata | [Q1013618](https://www.wikidata.org/wiki/Q1013618) (CC0) |
| Wikidata class | castle |
| Types | architectural heritage monument\|Ordensburg |
| Administrative area | Radzyń Chełmiński |
| Inception | 1234 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://zamekradzyn.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, marker 1, road 10, building 22, waterway 1, zone 3, wall 3).

Evidence: documented 0, mapped 42, inferred 0, derived 0; heights documented 13, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10206758 historic=castle Q1013618 600 m from ledger point
- origin moved 601 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.3875/18.94444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; architectural heritage monument\|Ordensburg; sitelinks=6; wikidata:Q1013618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/radzyn-che-minski-castle-q1013618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
