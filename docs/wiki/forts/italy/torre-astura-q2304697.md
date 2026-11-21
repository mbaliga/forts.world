# Torre Astura

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-astura-q2304697` |
| Coordinates | 41.40782, 12.76489 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.40782/12.76489)) |
| Wikidata | [Q2304697](https://www.wikidata.org/wiki/Q2304697) (CC0) |
| Wikidata class | castle |
| Types | castle\|Roman villa |
| Administrative area | Nettuno |
| Inception | 1193 |
| Designations | Italian national heritage |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, marker 1, coastline 1, road 3, building 1, zone 39, water 1).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54894273 historic=castle Q2304697 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":366,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.40782/12.76489) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Roman villa; sitelinks=10; wikidata:Q2304697 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 47 elements); data/traces/torre-astura-q2304697.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
