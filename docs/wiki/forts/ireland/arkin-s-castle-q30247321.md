# Arkin's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arkin-s-castle-q30247321` |
| Coordinates | 53.10485, -9.66261 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.10485/-9.66261)) |
| Wikidata | [Q30247321](https://www.wikidata.org/wiki/Q30247321) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Killeany |
| Designations | national monument of Ireland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 1, road 70, coastline 1, building 72, wall 190, zone 99, retaining-wall 1, water 1).

Evidence: documented 0, mapped 252, inferred 0, derived 1; heights documented 33, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1004226523 historic=castle Q30247321 4 m from ledger point
- pruned to the outline plus 150 m: 436 -> 252 elements
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":117,"medianInside":2.6,"medianOutside":7.3}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.10485/-9.66261) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q30247321 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/arkin-s-castle-q30247321.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
