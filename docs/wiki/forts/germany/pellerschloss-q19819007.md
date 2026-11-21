# Pellerschloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pellerschloss-q19819007` |
| Coordinates | 49.42104, 11.19219 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.42104/11.19219)) |
| Wikidata | [Q19819007](https://www.wikidata.org/wiki/Q19819007) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|no\|timber-framed house\|Schloss |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `ruins` | no |
| OSM `website` | https://www.nuernberg.de/internet/buergeraemter/pellerschloss.html |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, road 62, building 328, waterway 5, zone 5, wall 3).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 62, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43051126 historic=castle Q19819007 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 328 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.42104/11.19219) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|no\|timber-framed house\|Schloss; sitelinks=2; wikidata:Q19819007 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/pellerschloss-q19819007.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
