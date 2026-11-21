# Forte di Vigliena

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-di-vigliena-q3748692` |
| Coordinates | 40.83778, 14.29649 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.83778/14.29649)) |
| Wikidata | [Q3748692](https://www.wikidata.org/wiki/Q3748692) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Naples |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, road 43, coastline 1, building 56, zone 1, wall 3, water 1).

Evidence: documented 0, mapped 107, inferred 0, derived 1; heights documented 1, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/436159430 historic=castle Q3748692 10 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":18,"medianInside":0,"medianOutside":4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.83778/14.29649) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q3748692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/forte-di-vigliena-q3748692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
