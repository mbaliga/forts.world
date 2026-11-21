# Beacon Hill Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beacon-hill-battery-q4875953` |
| Coordinates | 51.9381, 1.2892 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9381/1.2892)) |
| Wikidata | [Q4875953](https://www.wikidata.org/wiki/Q4875953) (CC0) |
| Wikidata class | fort |
| Types | fort\|artillery battery |
| Administrative area | Harwich |
| Inception | 1889 |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `fortification_type` | battery |
| OSM `ruins` | yes |
| OSM `barrier` | fence |
| OSM `website` | https://www.beaconhillfort.org.uk |

## What the model contains

Tier **T1**, status `outline-only`, 104 elements (outline 1, road 38, building 62, coastline 2, water 1).

Evidence: documented 0, mapped 104, inferred 0, derived 1; heights documented 7, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/584607691 historic=fort Q4875953 30 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":460,"medianInside":-0.7,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9381/1.2892) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|artillery battery; sitelinks=2; wikidata:Q4875953 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 104 elements); data/traces/beacon-hill-battery-q4875953.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
