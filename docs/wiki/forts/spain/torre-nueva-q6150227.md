# Torre Nueva

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-nueva-q6150227` |
| Coordinates | 36.49246, -4.69326 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.49246/-4.69326)) |
| Wikidata | [Q6150227](https://www.wikidata.org/wiki/Q6150227) (CC0) |
| Wikidata class | fortification |
| Types | watchtower\|monument |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 88 elements (outline 1, coastline 1, road 21, building 62, zone 1, wall 1, water 1).

Evidence: documented 0, mapped 88, inferred 0, derived 1; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232777613 historic=castle Q6150227 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":55,"medianInside":0,"medianOutside":21.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.49246/-4.69326) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower\|monument; sitelinks=1; wikidata:Q6150227 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 88 elements); data/traces/torre-nueva-q6150227.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
