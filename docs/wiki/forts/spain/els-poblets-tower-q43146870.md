# Els Poblets Tower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `els-poblets-tower-q43146870` |
| Coordinates | 38.84748, 0.01591 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.84748/0.01591)) |
| Wikidata | [Q43146870](https://www.wikidata.org/wiki/Q43146870) (CC0) |
| Wikidata class | fortification |
| Types | monument\|defensive tower |
| Administrative area | Els Poblets |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, road 65, building 123, waterway 3, zone 9, wall 75).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 122, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/490538454 historic=yes 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.84748/0.01591) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|defensive tower; sitelinks=1; wikidata:Q43146870 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/els-poblets-tower-q43146870.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
