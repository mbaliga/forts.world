# Doon Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `doon-castle-q2452829` |
| Coordinates | 54.75978, -5.00574 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.75978/-5.00574)) |
| Wikidata | [Q2452829](https://www.wikidata.org/wiki/Q2452829) (CC0) |
| Wikidata class | fort |
| Types | tower\|promontory fort\|archaeological site\|broch |
| Administrative area | Dumfries and Galloway |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, coastline 1, road 3, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19127290 historic=archaeological_site Q2452829 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":228,"medianInside":10,"medianOutside":7.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.75978/-5.00574) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|promontory fort\|archaeological site\|broch; sitelinks=4; wikidata:Q2452829 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/doon-castle-q2452829.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
