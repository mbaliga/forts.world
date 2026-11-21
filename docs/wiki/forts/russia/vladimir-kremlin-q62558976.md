# Vladimir Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vladimir-kremlin-q62558976` |
| Coordinates | 56.13109, 40.41446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.13109/40.41446)) |
| Wikidata | [Q62558976](https://www.wikidata.org/wiki/Q62558976) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Vladimir |
| Inception | 1200 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 12, road 277, building 56, wall 23, waterway 1, zone 11, retaining-wall 23).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 48, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177218810 historic=monument 471 m from ledger point
- roads capped: kept the 150 longest of 277 mapped (trace size budget); minor lanes are not drawn
- origin moved 471 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.13109/40.41446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=1; wikidata:Q62558976 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/vladimir-kremlin-q62558976.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
