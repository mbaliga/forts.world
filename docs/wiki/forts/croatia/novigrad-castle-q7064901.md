# Novigrad Castle

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `novigrad-castle-q7064901` |
| Coordinates | 44.1839, 15.554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.1839/15.554)) |
| Wikidata | [Q7064901](https://www.wikidata.org/wiki/Q7064901) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Zadar County |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, road 34, building 143, zone 3, wall 6, coastline 1, cliff 1, retaining-wall 1, water 4).

Evidence: documented 0, mapped 194, inferred 0, derived 4; heights documented 0, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/394292121 historic=fort Q7064901 402 m from ledger point
- origin moved 404 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":38,"medianInside":0.1,"medianOutside":30.9}
- sea-1: DEM check ok {"cells":31,"medianInside":0.1,"medianOutside":29.9}
- sea-2: DEM check failed {"cells":394,"medianInside":26.5,"medianOutside":38.3}
- sea-3: DEM check failed {"cells":396,"medianInside":26.1,"medianOutside":43.7}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.1839/15.554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q7064901 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/novigrad-castle-q7064901.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
