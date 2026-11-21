# Örlinger Tower Fort

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orlinger-tower-fort-q69661993` |
| Coordinates | 48.41732, 9.99276 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.41732/9.99276)) |
| Wikidata | [Q69661993](https://www.wikidata.org/wiki/Q69661993) (CC0) |
| Wikidata class | fort |
| Types | fort\|defence work |
| Administrative area | Ulm |
| Inception | 1852 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.atarimuseum.de/festung/ul38.html |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, road 47, waterway 4, zone 10, water 2, building 73, cliff 1, wall 3).

Evidence: documented 0, mapped 141, inferred 0, derived 0; heights documented 0, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223731048 historic=castle Q108124003 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.41732/9.99276) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|defence work; sitelinks=1; wikidata:Q69661993 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/orlinger-tower-fort-q69661993.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
