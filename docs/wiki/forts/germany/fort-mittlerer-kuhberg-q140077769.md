# Fort Mittlerer Kuhberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mittlerer-kuhberg-q140077769` |
| Coordinates | 48.38037, 9.95849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.38037/9.95849)) |
| Wikidata | [Q140077769](https://www.wikidata.org/wiki/Q140077769) (CC0) |
| Wikidata class | fort |
| Types | fort\|defence work |
| Administrative area | Ulm |
| Inception | 1857 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 300 elements (marker 2, road 326, waterway 4, building 169, zone 24).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 13, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 3017 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4860 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 169 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 326 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.38037/9.95849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|defence work; sitelinks=1; wikidata:Q140077769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 300 elements); data/traces/fort-mittlerer-kuhberg-q140077769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
