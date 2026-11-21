# Castle of Guarda

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-guarda-q5049729` |
| Coordinates | 40.5375, -7.27167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.5375/-7.27167)) |
| Wikidata | [Q5049729](https://www.wikidata.org/wiki/Q5049729) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Guarda |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 331 elements (marker 6, road 303, building 111, wall 52, zone 2, cliff 6, retaining-wall 4).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 2, inferred 0, unknown 165.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21723185 historic=castle 356 m from ledger point
- site is a site relation of 12 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (417 x 418 m)
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 273 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.5375/-7.27167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q5049729 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/castle-of-guarda-q5049729.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
