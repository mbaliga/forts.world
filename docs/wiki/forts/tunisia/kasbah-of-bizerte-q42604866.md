# Kasbah of Bizerte

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasbah-of-bizerte-q42604866` |
| Coordinates | 37.27892, 9.87568 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.27892/9.87568)) |
| Wikidata | [Q42604866](https://www.wikidata.org/wiki/Q42604866) (CC0) |
| Wikidata class | castle |
| Types | kasbah |
| Administrative area | Bizerte |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, marker 2, coastline 2, road 61, wall 9, building 136, water 3).

Evidence: documented 0, mapped 214, inferred 0, derived 3; heights documented 1, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1295007017 historic=fort 135 m from ledger point
- origin moved 135 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1050,"medianInside":3.9,"medianOutside":3}
- sea-1: DEM check failed {"cells":1592,"medianInside":3.5,"medianOutside":2.8}
- sea-2: DEM check ok {"cells":978,"medianInside":2.8,"medianOutside":5.6}
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.27892/9.87568) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=castle; kasbah; sitelinks=1; wikidata:Q42604866 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/kasbah-of-bizerte-q42604866.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
