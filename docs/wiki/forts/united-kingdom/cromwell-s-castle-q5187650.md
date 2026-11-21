# Cromwell's Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cromwell-s-castle-q5187650` |
| Coordinates | 49.9622, -6.34947 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9622/-6.34947)) |
| Wikidata | [Q5187650](https://www.wikidata.org/wiki/Q5187650) (CC0) |
| Wikidata class | fort |
| Types | artillery fort |
| Administrative area | Tresco |
| Designations | Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/cromwells-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, road 11, zone 3, building 1, wall 12, coastline 3, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1361433626 historic=castle Q5187650 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":263,"medianInside":-2,"medianOutside":19.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9622/-6.34947) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort; sitelinks=3; wikidata:Q5187650 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/cromwell-s-castle-q5187650.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
