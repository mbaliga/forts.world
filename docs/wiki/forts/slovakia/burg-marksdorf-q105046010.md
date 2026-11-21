# Burg Marksdorf

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-marksdorf-q105046010` |
| Coordinates | 48.91583, 20.6203 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.91583/20.6203)) |
| Wikidata | [Q105046010](https://www.wikidata.org/wiki/Q105046010) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Markušovce |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://hradmarkusovce.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 160 elements (outline 1, marker 2, road 33, zone 3, building 117, waterway 2, water 1).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 4, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112580209 historic=castle Q105046010 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.91583/20.6203) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=3; wikidata:Q105046010 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 160 elements); data/traces/burg-marksdorf-q105046010.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
