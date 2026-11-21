# Pałac Sejmu Stanów Pomorskich

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pa-ac-sejmu-stanow-pomorskich-q17619155` |
| Coordinates | 53.42784, 14.55511 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.42784/14.55511)) |
| Wikidata | [Q17619155](https://www.wikidata.org/wiki/Q17619155) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Szczecin |
| Inception | 1726 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Pałac Klasycystyczny |
| OSM `website` | https://www.zsm2.szczecin.pl/index.php |

## What the model contains

Tier **T1**, status `outline+walls`, 399 elements (outline 1, marker 7, road 353, building 142, zone 101, wall 19, retaining-wall 1).

Evidence: documented 0, mapped 399, inferred 0, derived 0; heights documented 127, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53222662 historic=castle Q11814784 155 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 142 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 353 mapped (trace size budget); minor lanes are not drawn
- origin moved 155 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.42784/14.55511) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q17619155 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 399 elements); data/traces/pa-ac-sejmu-stanow-pomorskich-q17619155.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
