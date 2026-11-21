# Castle of Santa Ana

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-santa-ana-q5757589` |
| Coordinates | 43.38466, -3.21484 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.38466/-3.21484)) |
| Wikidata | [Q5757589](https://www.wikidata.org/wiki/Q5757589) (CC0) |
| Wikidata class | castle |
| Types | castle\|Historic Ensemble |
| Administrative area | Castro Urdiales |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 157 elements (outline 1, marker 11, coastline 1, road 67, building 66, wall 3, zone 4, water 4).

Evidence: documented 0, mapped 157, inferred 0, derived 4; heights documented 36, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/438129606 historic=castle Q5757589 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":398,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":95,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":181,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":398,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.38466/-3.21484) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Historic Ensemble; sitelinks=5; wikidata:Q5757589 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 157 elements); data/traces/castle-of-santa-ana-q5757589.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
