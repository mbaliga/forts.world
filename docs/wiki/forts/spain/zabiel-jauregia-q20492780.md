# Zabiel Jauregia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zabiel-jauregia-q20492780` |
| Coordinates | 43.30706, -2.38581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.30706/-2.38581)) |
| Wikidata | [Q20492780](https://www.wikidata.org/wiki/Q20492780) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|monument |
| Administrative area | Mutriku |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, marker 1, road 199, coastline 1, building 200, wall 2, waterway 2, zone 3, water 2).

Evidence: documented 0, mapped 282, inferred 0, derived 2; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48774963 historic=castle Q20492780 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 200 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":7,"medianInside":17.8,"medianOutside":55.3}
- sea-1: DEM check failed {"cells":3,"medianInside":20,"medianOutside":55.1}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.30706/-2.38581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|monument; sitelinks=2; wikidata:Q20492780 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/zabiel-jauregia-q20492780.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
