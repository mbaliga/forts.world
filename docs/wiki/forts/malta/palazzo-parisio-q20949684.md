# Palazzo Parisio

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-parisio-q20949684` |
| Coordinates | 35.91499, 14.44426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.91499/14.44426)) |
| Wikidata | [Q20949684](https://www.wikidata.org/wiki/Q20949684) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|former hospital |
| Administrative area | Naxxar |
| Inception | 1906 |
| Designations | Grade 1 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | The original palace was built in 1733. After it was acquired by the Parisio family, it iwas used as their summer residence until the 1850s. It was rebuilt and decorated in the beginning of the 1900s by the Marquis Giuseppe Scicluna. |
| OSM `website` | https://www.palazzoparisio.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 122 elements (outline 1, marker 1, road 93, building 18, wall 6, zone 3).

Evidence: documented 0, mapped 122, inferred 0, derived 0; heights documented 1, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33684627 historic=castle Q20949684 1 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.91499/14.44426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|former hospital; sitelinks=3; wikidata:Q20949684 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 122 elements); data/traces/palazzo-parisio-q20949684.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
