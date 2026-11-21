# Gauci Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gauci-tower-q20949403` |
| Coordinates | 35.91986, 14.44253 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.91986/14.44253)) |
| Wikidata | [Q20949403](https://www.wikidata.org/wiki/Q20949403) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Naxxar |
| Inception | 1548 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | The original palace was built in 1733. After it was acquired by the Parisio family, it iwas used as their summer residence until the 1850s. It was rebuilt and decorated in the beginning of the 1900s by the Marquis Giuseppe Scicluna. |
| OSM `website` | https://www.palazzoparisio.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 111 elements (outline 1, marker 1, road 85, building 15, wall 6, zone 3).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 1, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33684627 historic=castle Q20949684 564 m from ledger point
- origin moved 561 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.91986/14.44253) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=6; wikidata:Q20949403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 111 elements); data/traces/gauci-tower-q20949403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
