# Stegeholm

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stegeholm-q10678044` |
| Coordinates | 57.7625, 16.64278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.7625/16.64278)) |
| Wikidata | [Q10678044](https://www.wikidata.org/wiki/Q10678044) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Västervik Municipality |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 57 elements (outline 1, coastline 9, road 30, building 14, water 3).

Evidence: documented 0, mapped 57, inferred 0, derived 3; heights documented 3, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1126644152 historic=ruins Q10678044 16 m from ledger point
- island ring (16068 m2) cut out of sea-0
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":348,"medianInside":7,"medianOutside":7}
- sea-1: DEM check failed {"cells":382,"medianInside":7,"medianOutside":4.3}
- sea-2: DEM check failed {"cells":394,"medianInside":7,"medianOutside":4.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.7625/16.64278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q10678044 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 57 elements); data/traces/stegeholm-q10678044.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
