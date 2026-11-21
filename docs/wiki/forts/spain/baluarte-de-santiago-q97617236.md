# Baluarte de Santiago

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluarte-de-santiago-q97617236` |
| Coordinates | 36.52782, -6.28858 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.52782/-6.28858)) |
| Wikidata | [Q97617236](https://www.wikidata.org/wiki/Q97617236) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, marker 5, road 126, wall 4, building 60, zone 4, water 2, coastline 1).

Evidence: documented 0, mapped 203, inferred 0, derived 1; heights documented 2, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162532972 historic=fort Q98059182 303 m from ledger point
- origin moved 309 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":156,"medianInside":0,"medianOutside":18.2}
- 49 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.52782/-6.28858) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q97617236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/baluarte-de-santiago-q97617236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
