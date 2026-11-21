# Castle in Bratian

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-bratian-q9386608` |
| Coordinates | 53.4642, 19.6078 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4642/19.6078)) |
| Wikidata | [Q9386608](https://www.wikidata.org/wiki/Q9386608) (CC0) |
| Wikidata class | castle |
| Types | Ordensburg |
| Administrative area | Bratian |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Nędzne resztki muru zamku Bratiańskiego pozostały... |
| OSM `ruins` | yes |
| OSM `website` | https://www.zamki.pl/?idzamku=bratian |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, road 11, waterway 3, water 6, building 22, wall 2, zone 1).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 21, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1124651251 historic=castle Q9386608 549 m from ledger point
- origin moved 548 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4642/19.6078) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Ordensburg; sitelinks=2; wikidata:Q9386608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/castle-in-bratian-q9386608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
