# Fort de Loyasse

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-loyasse-q3078191` |
| Coordinates | 45.7659, 4.80922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7659/4.80922)) |
| Wikidata | [Q3078191](https://www.wikidata.org/wiki/Q3078191) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | 9th arrondissement of Lyon |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 2, road 145, waterway 1, building 56, cliff 5, wall 9, zone 12, retaining-wall 13).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 3, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/512708363 historic=castle Q3078037 708 m from ledger point
- origin moved 709 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7659/4.80922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/fort-de-loyasse-q3078191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
