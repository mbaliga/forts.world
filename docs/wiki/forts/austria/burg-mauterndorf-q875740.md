# Burg Mauterndorf

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-mauterndorf-q875740` |
| Coordinates | 47.1375, 13.6783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.1375/13.6783)) |
| Wikidata | [Q875740](https://www.wikidata.org/wiki/Q875740) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Mauterndorf |
| Inception | 1253 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |
| OSM `website` | https://www.burg-mauterndorf.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, road 80, waterway 7, building 81, wall 2, zone 12, water 2).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 1, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18622017 historic=castle Q875740 14 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.1375/13.6783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=13; wikidata:Q875740 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/burg-mauterndorf-q875740.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
