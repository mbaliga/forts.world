# Torre Incina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-incina-q67143811` |
| Coordinates | 40.97913, 17.25798 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.97913/17.25798)) |
| Wikidata | [Q67143811](https://www.wikidata.org/wiki/Q67143811) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Polignano a Mare |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, coastline 2, road 19, wall 8, waterway 1, building 6, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/419927194 historic=castle Q67143811 1 m from ledger point
- sea-0: DEM check ok {"cells":76,"medianInside":0,"medianOutside":7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.97913/17.25798) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=1; wikidata:Q67143811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/torre-incina-q67143811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
