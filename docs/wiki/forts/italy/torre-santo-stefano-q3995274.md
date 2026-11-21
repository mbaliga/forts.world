# Torre Santo Stefano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-santo-stefano-q3995274` |
| Coordinates | 40.1833, 18.47315 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.1833/18.47315)) |
| Wikidata | [Q3995274](https://www.wikidata.org/wiki/Q3995274) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Otranto |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 71 elements (outline 1, coastline 1, zone 1, road 18, building 49, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 0, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/425021421 historic=ruins Q3995274 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":122,"medianInside":0,"medianOutside":9.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.1833/18.47315) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=2; wikidata:Q3995274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 71 elements); data/traces/torre-santo-stefano-q3995274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
