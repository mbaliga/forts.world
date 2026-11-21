# Ban Chao Phraya

> Thailand · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ban-chao-phraya-q13016502` |
| Coordinates | 13.76345, 100.49489 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.76345/100.49489)) |
| Wikidata | [Q13016502](https://www.wikidata.org/wiki/Q13016502) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Chana Songkhram |
| Designations | registered Thai historic site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, road 77, building 242, waterway 4, wall 7, zone 9).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 8, inferred 0, unknown 241.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1296288398 historic=castle Q13016502 2 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.76345/100.49489) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q13016502 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/ban-chao-phraya-q13016502.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/thailand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
