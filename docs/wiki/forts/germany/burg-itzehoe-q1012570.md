# Burg Itzehoe

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-itzehoe-q1012570` |
| Coordinates | 53.9212, 9.51525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.9212/9.51525)) |
| Wikidata | [Q1012570](https://www.wikidata.org/wiki/Q1012570) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Itzehoe |
| Wikipedia language editions | 1 |
| OSM `historic` | monastery |
| OSM `heritage` | 4 |
| OSM `website` | https://www.kloster-itzehoe.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 12, road 207, water 2, building 540, zone 1, wall 3, waterway 2).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 5, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/459076494 historic=monastery Q1775395 372 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 540 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 375 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.9212/9.51525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1012570 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/burg-itzehoe-q1012570.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
