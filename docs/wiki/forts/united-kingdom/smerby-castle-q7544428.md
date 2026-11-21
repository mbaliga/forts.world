# Smerby Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `smerby-castle-q7544428` |
| Coordinates | 55.44426, -5.54911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.44426/-5.54911)) |
| Wikidata | [Q7544428](https://www.wikidata.org/wiki/Q7544428) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, coastline 1, zone 1, road 2, building 3, water 1).

Evidence: documented 0, mapped 9, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/322283707 historic=ruins 601 m from ledger point
- origin moved 601 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":137,"medianInside":2.7,"medianOutside":21.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.44426/-5.54911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q7544428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/smerby-castle-q7544428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
