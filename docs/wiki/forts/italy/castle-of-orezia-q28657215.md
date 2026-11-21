# Castle of Orezia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-orezia-q28657215` |
| Coordinates | 46.07734, 9.31091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.07734/9.31091)) |
| Wikidata | [Q28657215](https://www.wikidata.org/wiki/Q28657215) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|scenic viewpoint\|observation tower |
| Administrative area | Dervio |
| Inception | 1039 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, road 51, building 114, waterway 1, wall 3, cliff 2).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 3, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237371443 historic=yes Q28657215 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.07734/9.31091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|scenic viewpoint\|observation tower; sitelinks=2; wikidata:Q28657215 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/castle-of-orezia-q28657215.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
