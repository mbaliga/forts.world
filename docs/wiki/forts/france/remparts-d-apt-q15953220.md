# Remparts d'Apt

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-d-apt-q15953220` |
| Coordinates | 43.87413, 5.39624 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.87413/5.39624)) |
| Wikidata | [Q15953220](https://www.wikidata.org/wiki/Q15953220) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Apt |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 6, road 126, building 758, waterway 1, zone 4, water 4, wall 2, retaining-wall 2).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1281529303 historic=yes Q22916609 215 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 758 mapped (trace size budget); the rest of the town is not drawn
- origin moved 215 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.87413/5.39624) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q15953220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/remparts-d-apt-q15953220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
