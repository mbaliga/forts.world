# Palacio Vela de los Cobos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-vela-de-los-cobos-q9054412` |
| Coordinates | 38.00835, -3.36974 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.00835/-3.36974)) |
| Wikidata | [Q9054412](https://www.wikidata.org/wiki/Q9054412) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Úbeda |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 3, building 460, road 125, zone 43, wall 314, retaining-wall 10).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 60, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10974749 historic=castle 3 m from ledger point
- pruned to the outline plus 150 m: 956 -> 527 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.00835/-3.36974) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q9054412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/palacio-vela-de-los-cobos-q9054412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
