# Aragonese Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aragonese-castle-q3662304` |
| Coordinates | 38.10554, 15.64421 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.10554/15.64421)) |
| Wikidata | [Q3662304](https://www.wikidata.org/wiki/Q3662304) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Reggio Calabria |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://turismo.reggiocal.it/HomePage.aspx |

## What the model contains

Tier **T1**, status `outline+walls`, 216 elements (outline 1, marker 2, road 88, building 430, wall 1, coastline 1, retaining-wall 3).

Evidence: documented 0, mapped 216, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170272691 historic=castle Q3662304 62 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 430 mapped (trace size budget); the rest of the town is not drawn
- origin moved 63 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.10554/15.64421) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q3662304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 216 elements); data/traces/aragonese-castle-q3662304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
