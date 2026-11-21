# Dunraven Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunraven-castle-q5315652` |
| Coordinates | 51.44333, -3.6017 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.44333/-3.6017)) |
| Wikidata | [Q5315652](https://www.wikidata.org/wiki/Q5315652) (CC0) |
| Wikidata class | castle |
| Types | house\|castle\|fortified manor house |
| Administrative area | Southerndown |
| Designations | Grade II listed building\|National Monument of Wales |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, road 15, waterway 1, coastline 1, zone 4, cliff 2, wall 6, water 2).

Evidence: documented 0, mapped 32, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1551229058 historic=ruins 23 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":32,"medianInside":11,"medianOutside":26.9}
- sea-1: DEM check failed {"cells":28,"medianInside":13.3,"medianOutside":26.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.44333/-3.6017) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; house\|castle\|fortified manor house; sitelinks=2; wikidata:Q5315652 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/dunraven-castle-q5315652.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
