# Fort Zoutman

> Aruba · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-zoutman-q610796` |
| Coordinates | 12.5178, -70.03563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.5178/-70.03563)) |
| Wikidata | [Q610796](https://www.wikidata.org/wiki/Q610796) (CC0) |
| Wikidata class | fort |
| Types | fort\|building\|national museum |
| Administrative area | Oranjestad |
| Inception | 1866 |
| Wikipedia language editions | 10 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 323 elements (outline 1, marker 5, road 133, building 171, zone 7, waterway 1, water 4, coastline 1).

Evidence: documented 0, mapped 323, inferred 0, derived 1; heights documented 7, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/769698096 historic=fort Q610796 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":10,"medianInside":8.2,"medianOutside":6.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.5178/-70.03563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|building\|national museum; sitelinks=10; wikidata:Q610796 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 323 elements); data/traces/fort-zoutman-q610796.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/aruba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
