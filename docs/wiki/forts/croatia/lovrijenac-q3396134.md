# Lovrijenac

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lovrijenac-q3396134` |
| Coordinates | 42.64073, 18.10441 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.64073/18.10441)) |
| Wikidata | [Q3396134](https://www.wikidata.org/wiki/Q3396134) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Dubrovnik |
| Designations | Cultural Heritage in Croatia |
| Wikipedia language editions | 20 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 201 elements (outline 1, marker 5, road 82, retaining-wall 4, wall 10, building 84, zone 7, coastline 4, cliff 2, water 2).

Evidence: documented 0, mapped 201, inferred 0, derived 1; heights documented 7, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165354386 historic=fort Q3396134 12 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":857,"medianInside":0,"medianOutside":15.4}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.64073/18.10441) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=20; wikidata:Q3396134 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 201 elements); data/traces/lovrijenac-q3396134.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
