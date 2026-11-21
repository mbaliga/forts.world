# Broch of Gurness

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `broch-of-gurness-q923355` |
| Coordinates | 59.12397, -3.08167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.12397/-3.08167)) |
| Wikidata | [Q923355](https://www.wikidata.org/wiki/Q923355) (CC0) |
| Wikidata class | fort |
| Types | tower\|archaeological site\|level terrain fort |
| Administrative area | Orkney Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, road 6, building 1, zone 2, wall 64, coastline 1, water 1).

Evidence: documented 0, mapped 76, inferred 0, derived 1; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19134980 historic=archaeological_site 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":735,"medianInside":3,"medianOutside":8.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.12397/-3.08167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|archaeological site\|level terrain fort; sitelinks=12; wikidata:Q923355 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/broch-of-gurness-q923355.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
