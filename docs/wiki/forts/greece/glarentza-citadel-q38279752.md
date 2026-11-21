# Glarentza Citadel

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `glarentza-citadel-q38279752` |
| Coordinates | 37.94055, 21.13617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.94055/21.13617)) |
| Wikidata | [Q38279752](https://www.wikidata.org/wiki/Q38279752) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Andravida-Kyllini Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, coastline 1, road 10, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/928488264 historic=castle Q38279752 5 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":122,"medianInside":0,"medianOutside":10.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.94055/21.13617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=1; wikidata:Q38279752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/glarentza-citadel-q38279752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
