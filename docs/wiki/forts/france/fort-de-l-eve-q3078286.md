# Fort de l'Eve

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-l-eve-q3078286` |
| Coordinates | 47.2392, -2.26722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2392/-2.26722)) |
| Wikidata | [Q3078286](https://www.wikidata.org/wiki/Q3078286) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, marker 5, building 16, road 12, coastline 1, cliff 2, zone 4, retaining-wall 3, water 1).

Evidence: documented 0, mapped 45, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/256830213 historic=fort 23 m from ledger point
- origin moved 28 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":261,"medianInside":0,"medianOutside":13.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2392/-2.26722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078286 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 45 elements); data/traces/fort-de-l-eve-q3078286.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
