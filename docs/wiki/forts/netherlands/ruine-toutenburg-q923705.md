# Ruïne Toutenburg

> Netherlands · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruine-toutenburg-q923705` |
| Coordinates | 52.67923, 5.95381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.67923/5.95381)) |
| Wikidata | [Q923705](https://www.wikidata.org/wiki/Q923705) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle |
| Administrative area | Steenwijkerland |
| Designations | Rijksmonument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.stadvollenhove.nl/index.php/gebouwen/kastelen/de-toutenburg |

## What the model contains

Tier **T1**, status `location-only`, 378 elements (marker 1, road 201, zone 77, wall 8, building 120, water 22).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12582072 historic=castle Q923705 0 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4 x 12 m)
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.67923/5.95381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle; sitelinks=5; wikidata:Q923705 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/ruine-toutenburg-q923705.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
