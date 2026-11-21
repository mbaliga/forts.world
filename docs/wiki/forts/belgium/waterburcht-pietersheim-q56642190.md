# Waterburcht Pietersheim

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `waterburcht-pietersheim-q56642190` |
| Coordinates | 50.8985, 5.66584 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8985/5.66584)) |
| Wikidata | [Q56642190](https://www.wikidata.org/wiki/Q56642190) (CC0) |
| Wikidata class | castle |
| Types | museum\|water castle |
| Administrative area | Lanaken |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://www.visitlanaken.be/waterburcht |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, road 50, building 8, water 3, zone 23, waterway 9).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384769713 historic=castle Q56642190 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8985/5.66584) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; museum\|water castle; sitelinks=2; wikidata:Q56642190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 95 elements); data/traces/waterburcht-pietersheim-q56642190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
