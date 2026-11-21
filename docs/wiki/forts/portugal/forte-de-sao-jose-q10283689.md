# Forte de São José

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-jose-q10283689` |
| Coordinates | 32.64125, -16.9177 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.64125/-16.9177)) |
| Wikidata | [Q10283689](https://www.wikidata.org/wiki/Q10283689) (CC0) |
| Wikidata class | fort |
| Types | fortification\|cultural heritage |
| Administrative area | Sé |
| Inception | 1762 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, road 110, cliff 1, building 44, zone 2, wall 3, coastline 6, retaining-wall 3, water 2).

Evidence: documented 0, mapped 173, inferred 0, derived 2; heights documented 24, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/266317806 historic=fort Q10283689 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":34,"medianInside":8.3,"medianOutside":3.8}
- sea-1: DEM check ok {"cells":210,"medianInside":0,"medianOutside":16.4}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.64125/-16.9177) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|cultural heritage; sitelinks=3; wikidata:Q10283689 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 173 elements); data/traces/forte-de-sao-jose-q10283689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
