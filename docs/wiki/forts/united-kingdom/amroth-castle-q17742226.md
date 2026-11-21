# Amroth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `amroth-castle-q17742226` |
| Coordinates | 51.7339, -4.65197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7339/-4.65197)) |
| Wikidata | [Q17742226](https://www.wikidata.org/wiki/Q17742226) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Amroth |
| Designations | National Monument of Wales\|Grade I listed building |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, road 12, wall 7, coastline 1, building 95, zone 4, water 1).

Evidence: documented 0, mapped 121, inferred 0, derived 1; heights documented 0, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/989179403 historic=castle Q17742226 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":128,"medianInside":11.3,"medianOutside":21}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7339/-4.65197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=4; wikidata:Q17742226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/amroth-castle-q17742226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
