# Tirefour Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tirefour-castle-q923383` |
| Coordinates | 56.52979, -5.46831 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.52979/-5.46831)) |
| Wikidata | [Q923383](https://www.wikidata.org/wiki/Q923383) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, road 5, coastline 1, building 1, cliff 1, wall 8, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19122471 historic=archaeological_site Q923383 45 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":91,"medianInside":8.9,"medianOutside":30}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.52979/-5.46831) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=5; wikidata:Q923383 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/tirefour-castle-q923383.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
