# Caerleon Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caerleon-castle-q15790795` |
| Coordinates | 51.60979, -2.95079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.60979/-2.95079)) |
| Wikidata | [Q15790795](https://www.wikidata.org/wiki/Q15790795) (CC0) |
| Wikidata class | ruin |
| Types | castle\|motte\|motte-and-bailey castle\|castle ruin |
| Administrative area | Caerleon |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 385 elements (outline 1, coastline 2, road 79, zone 6, waterway 3, building 279, wall 14, water 1).

Evidence: documented 0, mapped 385, inferred 0, derived 1; heights documented 37, inferred 0, unknown 256.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1036778676 historic=archaeological_site 11 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":16,"medianInside":6.8,"medianOutside":12.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.60979/-2.95079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|motte\|motte-and-bailey castle\|castle ruin; sitelinks=4; wikidata:Q15790795 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 385 elements); data/traces/caerleon-castle-q15790795.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
