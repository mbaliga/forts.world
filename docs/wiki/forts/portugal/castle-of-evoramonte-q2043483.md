# Castle of Evoramonte

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-evoramonte-q2043483` |
| Coordinates | 38.77189, -7.71584 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.77189/-7.71584)) |
| Wikidata | [Q2043483](https://www.wikidata.org/wiki/Q2043483) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Evoramonte |
| Inception | 1160 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 132 elements (outline 1, marker 2, road 53, zone 5, wall 32, building 38).

Evidence: documented 0, mapped 132, inferred 0, derived 0; heights documented 0, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/645954710 historic=castle Q2043483 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.77189/-7.71584) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q2043483 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/castle-of-evoramonte-q2043483.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
