# Fort Diamant

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-diamant-q3077844` |
| Coordinates | 4.87036, -52.2475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/4.87036/-52.2475)) |
| Wikidata | [Q3077844](https://www.wikidata.org/wiki/Q3077844) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Remire-Montjoly |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, marker 1, building 6, wall 8, road 11, coastline 1, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10555490 historic=fort Q3077844 110 m from ledger point
- origin moved 110 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":204,"medianInside":1.9,"medianOutside":16.5}
- 24 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/4.87036/-52.2475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3077844 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/fort-diamant-q3077844.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
