# Castle, Nizza di Sicilia

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-nizza-di-sicilia-q113557574` |
| Coordinates | 37.995, 15.4138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.995/15.4138)) |
| Wikidata | [Q113557574](https://www.wikidata.org/wiki/Q113557574) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Nizza di Sicilia |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 390 elements (marker 1, coastline 1, road 205, building 404, retaining-wall 35, waterway 1, wall 196, zone 15, water 1).

Evidence: documented 0, mapped 390, inferred 0, derived 1; heights documented 0, inferred 0, unknown 291.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 60 nearest the outline centre of 404 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 205 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":8,"medianInside":0,"medianOutside":14.9}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.995/15.4138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=1; wikidata:Q113557574 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 390 elements); data/traces/castle-nizza-di-sicilia-q113557574.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
