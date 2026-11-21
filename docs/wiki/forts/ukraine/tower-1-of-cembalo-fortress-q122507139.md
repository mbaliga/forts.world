# Tower 1 of Cembalo fortress

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-1-of-cembalo-fortress-q122507139` |
| Coordinates | 44.49562, 33.59906 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.49562/33.59906)) |
| Wikidata | [Q122507139](https://www.wikidata.org/wiki/Q122507139) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|cultural property |
| Administrative area | Sevastopol |
| Designations | architectural heritage of Ukraine |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, marker 3, coastline 4, road 39, building 31, cliff 5, wall 9, zone 8, retaining-wall 3, waterway 1, water 3).

Evidence: documented 0, mapped 107, inferred 0, derived 3; heights documented 6, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238532214 historic=castle Q6668620 132 m from ledger point
- origin moved 152 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":776,"medianInside":26.2,"medianOutside":8.9}
- sea-1: DEM check ok {"cells":70,"medianInside":2.8,"medianOutside":30}
- sea-2: DEM check ok {"cells":220,"medianInside":1.6,"medianOutside":46}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.49562/33.59906) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|cultural property; sitelinks=1; wikidata:Q122507139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/tower-1-of-cembalo-fortress-q122507139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
