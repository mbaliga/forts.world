# Schloss Tann

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-tann-q2243684` |
| Coordinates | 50.64215, 10.0211 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.64215/10.0211)) |
| Wikidata | [Q2243684](https://www.wikidata.org/wiki/Q2243684) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Tann |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Im 16., 17. und 18. Jahrhundert erbaute Schlossanlage der Familie von der Tann |

## What the model contains

Tier **T1**, status `location-only`, 319 elements (marker 8, road 67, waterway 9, zone 7, building 219, wall 9).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 11, inferred 0, unknown 217.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10072715 historic=castle Q2243684 10 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (61 x 63 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.64215/10.0211) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q2243684 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 319 elements); data/traces/schloss-tann-q2243684.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
