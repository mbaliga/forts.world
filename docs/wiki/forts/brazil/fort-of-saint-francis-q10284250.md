# Fort of Saint Francis

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-saint-francis-q10284250` |
| Coordinates | -8.01528, -34.84683 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-8.01528/-34.84683)) |
| Wikidata | [Q10284250](https://www.wikidata.org/wiki/Q10284250) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural heritage |
| Administrative area | Olinda |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 173 elements (outline 1, road 29, coastline 2, zone 2, building 136, water 3).

Evidence: documented 0, mapped 173, inferred 0, derived 3; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/514778951 historic=castle Q10284250 76 m from ledger point
- origin moved 77 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":16,"medianInside":-0.2,"medianOutside":9}
- sea-1: DEM check failed {"cells":372,"medianInside":9.4,"medianOutside":0.3}
- sea-2: DEM check ok {"cells":141,"medianInside":1.8,"medianOutside":11.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-8.01528/-34.84683) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural heritage; sitelinks=2; wikidata:Q10284250 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 173 elements); data/traces/fort-of-saint-francis-q10284250.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
