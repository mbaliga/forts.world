# Burraland

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burraland-q31118398` |
| Coordinates | 59.99125, -1.20089 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.99125/-1.20089)) |
| Wikidata | [Q31118398](https://www.wikidata.org/wiki/Q31118398) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|yes\|broch\|promontory fort |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, marker 1, road 1, coastline 1, wall 3, cliff 2, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19131045 historic=archaeological_site Q31118398 0 m from ledger point
- sea-0: DEM check ok {"cells":147,"medianInside":2.1,"medianOutside":8.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.99125/-1.20089) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|yes\|broch\|promontory fort; sitelinks=0; wikidata:Q31118398 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/burraland-q31118398.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
