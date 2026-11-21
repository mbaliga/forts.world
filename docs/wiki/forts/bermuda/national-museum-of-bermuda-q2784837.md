# National Museum of Bermuda

> Bermuda · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `national-museum-of-bermuda-q2784837` |
| Coordinates | 32.32927, -64.83313 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.32927/-64.83313)) |
| Wikidata | [Q2784837](https://www.wikidata.org/wiki/Q2784837) (CC0) |
| Wikidata class | fort |
| Types | fort\|maritime museum |
| Administrative area | Bermuda |
| Inception | 1974 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, marker 9, road 33, zone 5, building 23, coastline 1, wall 15, water 2, cliff 1).

Evidence: documented 0, mapped 90, inferred 0, derived 1; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/922717491 historic=fort 89 m from ledger point
- origin moved 90 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":258,"medianInside":0,"medianOutside":8.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.32927/-64.83313) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|maritime museum; sitelinks=4; wikidata:Q2784837 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/national-museum-of-bermuda-q2784837.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bermuda.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
