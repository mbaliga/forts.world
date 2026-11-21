# Kirkcudbright Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kirkcudbright-castle-q6415633` |
| Coordinates | 54.8352, -4.0611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.8352/-4.0611)) |
| Wikidata | [Q6415633](https://www.wikidata.org/wiki/Q6415633) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Dumfries and Galloway |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | http://www.historic-scotland.gov.uk/index/places/propertyresults/propertyoverview.htm?PropID=PL_204 |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 3, coastline 1, road 51, building 184, wall 9, zone 1, waterway 1, water 1).

Evidence: documented 0, mapped 253, inferred 0, derived 1; heights documented 1, inferred 0, unknown 193.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/90640062 historic=castle Q6722014 558 m from ledger point
- origin moved 558 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":127,"medianInside":3.8,"medianOutside":8.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.8352/-4.0611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q6415633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/kirkcudbright-castle-q6415633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
