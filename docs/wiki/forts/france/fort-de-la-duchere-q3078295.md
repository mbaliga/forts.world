# Fort de la Duchere

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-duchere-q3078295` |
| Coordinates | 45.7879, 4.7976 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7879/4.7976)) |
| Wikidata | [Q3078295](https://www.wikidata.org/wiki/Q3078295) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | 9th arrondissement of Lyon |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 168 elements (outline 1, road 101, building 63, retaining-wall 1, zone 1, wall 1).

Evidence: documented 0, mapped 168, inferred 0, derived 0; heights documented 9, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/125076163 historic=castle Q2971273 473 m from ledger point
- origin moved 474 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7879/4.7976) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 168 elements); data/traces/fort-de-la-duchere-q3078295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
