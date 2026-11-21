# Castle of Monção

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-moncao-q5049797` |
| Coordinates | 42.07866, -8.48001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.07866/-8.48001)) |
| Wikidata | [Q5049797](https://www.wikidata.org/wiki/Q5049797) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Monção e Troviscoso |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Fortaleza fronteiriça de planta poligonal composta por 10 baluartes irregulares e dispostos assimetricamente, e um meio-baluarte a NO, seis baluartes ao rio, a N., e os restantes a terra, sendo unidos por cortinas predominantemente rectas. |

## What the model contains

Tier **T1**, status `location-only`, 300 elements (marker 5, waterway 1, road 208, building 524, wall 18, zone 3, water 3).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18711658 historic=castle Q5049797 90 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (839 x 514 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 524 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 208 mapped (trace size budget); minor lanes are not drawn
- origin moved 116 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.07866/-8.48001) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q5049797 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/castle-of-moncao-q5049797.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
