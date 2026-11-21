# Fort de Pierre-Levée

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-pierre-levee-q3078216` |
| Coordinates | 46.71906, -2.3588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.71906/-2.3588)) |
| Wikidata | [Q3078216](https://www.wikidata.org/wiki/Q3078216) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | L'Île-d'Yeu |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 3 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, road 61, wall 3, building 124, zone 3, retaining-wall 3).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 1, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151833680 historic=castle Q3078216 13 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.71906/-2.3588) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3078216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/fort-de-pierre-levee-q3078216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
