# Castel Marie-Louise

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-marie-louise-q2941354` |
| Coordinates | 47.28098, -2.40793 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.28098/-2.40793)) |
| Wikidata | [Q2941354](https://www.wikidata.org/wiki/Q2941354) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|restaurant |
| Administrative area | La Baule-Escoublac |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 293 elements (outline 1, coastline 1, road 70, building 205, zone 15, water 1).

Evidence: documented 0, mapped 293, inferred 0, derived 1; heights documented 11, inferred 0, unknown 194.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99773500 historic=castle Q2941354 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":23,"medianInside":0,"medianOutside":7.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.28098/-2.40793) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|restaurant; sitelinks=2; wikidata:Q2941354 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 293 elements); data/traces/castel-marie-louise-q2941354.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
