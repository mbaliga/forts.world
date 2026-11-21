# Rzucewo Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rzucewo-palace-q30651439` |
| Coordinates | 54.68788, 18.46464 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.68788/18.46464)) |
| Wikidata | [Q30651439](https://www.wikidata.org/wiki/Q30651439) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|Schloss |
| Administrative area | Gmina Puck |
| Inception | 1845 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 61 elements (outline 1, coastline 1, road 31, building 26, zone 1, water 1).

Evidence: documented 0, mapped 61, inferred 0, derived 1; heights documented 3, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164985575 historic=castle Q30651439 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":44,"medianInside":6.5,"medianOutside":13.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.68788/18.46464) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|Schloss; sitelinks=4; wikidata:Q30651439 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 61 elements); data/traces/rzucewo-palace-q30651439.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
