# Castelliere sopra la Baia di Sistiana

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelliere-sopra-la-baia-di-sistiana-q113381077` |
| Coordinates | 45.76768, 13.63436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.76768/13.63436)) |
| Wikidata | [Q113381077](https://www.wikidata.org/wiki/Q113381077) (CC0) |
| Wikidata class | fortification |
| Types | castelliere |
| Administrative area | Doberdò del Lago |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 389 elements (building 24, road 125, zone 28, cliff 21, wall 184, retaining-wall 1, coastline 1, water 5).

Evidence: documented 0, mapped 389, inferred 0, derived 5; heights documented 11, inferred 0, unknown 198.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":18,"medianInside":5.3,"medianOutside":32.2}
- sea-1: DEM check ok {"cells":3,"medianInside":0.7,"medianOutside":30.3}
- sea-2: DEM check ok {"cells":44,"medianInside":0,"medianOutside":35.8}
- sea-3: DEM check failed {"cells":8,"medianInside":17.1,"medianOutside":31}
- sea-4: DEM check failed {"cells":400,"medianInside":27.9,"medianOutside":55.6}
- 243 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.76768/13.63436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castelliere; sitelinks=0; wikidata:Q113381077 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 389 elements); data/traces/castelliere-sopra-la-baia-di-sistiana-q113381077.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
