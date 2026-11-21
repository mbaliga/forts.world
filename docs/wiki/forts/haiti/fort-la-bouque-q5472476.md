# Fort la Bouque

> Haiti · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-la-bouque-q5472476` |
| Coordinates | 19.71165, -71.84425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.71165/-71.84425)) |
| Wikidata | [Q5472476](https://www.wikidata.org/wiki/Q5472476) (CC0) |
| Wikidata class | fort |
| Types | fort\|yes\|cape |
| Administrative area | Fort-Liberté Arrondissement |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 11 elements (outline 1, coastline 3, road 1, wall 5, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48616536 historic=fort Q5472476 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":278,"medianInside":0.4,"medianOutside":6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.71165/-71.84425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|yes\|cape; sitelinks=3; wikidata:Q5472476 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 11 elements); data/traces/fort-la-bouque-q5472476.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/haiti.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
