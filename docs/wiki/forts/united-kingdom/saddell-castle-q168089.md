# Saddell Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saddell-castle-q168089` |
| Coordinates | 55.52742, -5.50462 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.52742/-5.50462)) |
| Wikidata | [Q168089](https://www.wikidata.org/wiki/Q168089) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | category A listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `website` | https://www.landmarktrust.org.uk/search-and-book/properties/saddell-castle-11597/#Overview |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, road 6, waterway 2, coastline 1, building 2, wall 10, zone 1, water 1).

Evidence: documented 0, mapped 24, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232119717 historic=castle Q168089 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":1,"medianOutside":20}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.52742/-5.50462) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q168089 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/saddell-castle-q168089.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
