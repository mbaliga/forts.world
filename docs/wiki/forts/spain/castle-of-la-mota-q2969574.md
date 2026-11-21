# Castle of La Mota

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-la-mota-q2969574` |
| Coordinates | 41.3089, -4.90833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3089/-4.90833)) |
| Wikidata | [Q2969574](https://www.wikidata.org/wiki/Q2969574) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Medina del Campo |
| Inception | 1100 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 1, waterway 1, road 50, wall 13, building 193, retaining-wall 2, zone 3).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 90, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5415725 historic=castle Q2969574 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3089/-4.90833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=17; wikidata:Q2969574 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/castle-of-la-mota-q2969574.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
