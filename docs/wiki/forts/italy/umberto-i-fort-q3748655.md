# Umberto I Fort

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `umberto-i-fort-q3748655` |
| Coordinates | 44.05056, 9.85253 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.05056/9.85253)) |
| Wikidata | [Q3748655](https://www.wikidata.org/wiki/Q3748655) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Porto Venere |
| Inception | 1887 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, coastline 1, road 5, building 10, zone 1, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2765717 historic=castle Q3748655 147 m from ledger point
- origin moved 145 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":236,"medianInside":0,"medianOutside":11.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.05056/9.85253) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q3748655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 19 elements); data/traces/umberto-i-fort-q3748655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
