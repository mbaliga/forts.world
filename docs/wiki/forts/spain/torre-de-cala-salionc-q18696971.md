# Torre de Cala Salionç

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-cala-salionc-q18696971` |
| Coordinates | 41.73429, 2.95323 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.73429/2.95323)) |
| Wikidata | [Q18696971](https://www.wikidata.org/wiki/Q18696971) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Tossa de Mar |
| Designations | Cultural Asset part of the cultural heritage of Catalonia |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `description` | Iberian ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 96 elements (outline 1, road 24, building 63, coastline 3, cliff 1, waterway 1, water 3).

Evidence: documented 0, mapped 96, inferred 0, derived 3; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/588089853 historic=ruins Q18696971 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":13,"medianInside":0.3,"medianOutside":38}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":36.7}
- sea-2: DEM check ok {"cells":78,"medianInside":0,"medianOutside":44.3}
- 37 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.73429/2.95323) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q18696971 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 96 elements); data/traces/torre-de-cala-salionc-q18696971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
