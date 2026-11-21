# Remparts de La Charité-sur-Loire

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-la-charite-sur-loire-q22965201` |
| Coordinates | 47.17931, 3.01667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.17931/3.01667)) |
| Wikidata | [Q22965201](https://www.wikidata.org/wiki/Q22965201) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | La Charité-sur-Loire |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `location-only`, 271 elements (marker 2, road 139, waterway 1, building 952, wall 3, zone 3, retaining-wall 3).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20174818 historic=monastery 165 m from ledger point
- site is a site relation of 17 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (182 x 134 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 952 mapped (trace size budget); the rest of the town is not drawn
- origin moved 161 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.17931/3.01667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q22965201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 271 elements); data/traces/remparts-de-la-charite-sur-loire-q22965201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
