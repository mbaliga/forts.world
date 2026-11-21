# Fort Goareva

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-goareva-q138782274` |
| Coordinates | 48.83843, -3.00788 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.83843/-3.00788)) |
| Wikidata | [Q138782274](https://www.wikidata.org/wiki/Q138782274) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Île-de-Bréhat |
| Inception | 1863 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, coastline 2, road 17, building 15, zone 5, water 5).

Evidence: documented 0, mapped 45, inferred 0, derived 5; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1112350 historic=fort Q138782274 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":33,"medianInside":2,"medianOutside":14.1}
- sea-1: DEM check ok {"cells":10,"medianInside":0.4,"medianOutside":13.6}
- sea-2: DEM check ok {"cells":69,"medianInside":0,"medianOutside":15.5}
- sea-3: DEM check failed {"cells":0,"medianInside":null,"medianOutside":13.1}
- sea-4: DEM check failed {"cells":9,"medianInside":14.6,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.83843/-3.00788) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q138782274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 45 elements); data/traces/fort-goareva-q138782274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
