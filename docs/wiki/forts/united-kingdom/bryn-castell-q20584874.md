# Bryn Castell

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bryn-castell-q20584874` |
| Coordinates | 53.23029, -3.82119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.23029/-3.82119)) |
| Wikidata | [Q20584874](https://www.wikidata.org/wiki/Q20584874) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Caerhun |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 45 elements (marker 1, coastline 2, road 11, building 18, zone 5, waterway 6, water 2).

Evidence: documented 0, mapped 45, inferred 0, derived 2; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":377,"medianInside":18,"medianOutside":6.2}
- sea-1: DEM check ok {"cells":98,"medianInside":2,"medianOutside":20.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.23029/-3.82119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=3; wikidata:Q20584874 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/bryn-castell-q20584874.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
