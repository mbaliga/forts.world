# Reste der Stadtbefestigung Weimar

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reste-der-stadtbefestigung-weimar-q124617073` |
| Coordinates | 50.98194, 11.32611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.98194/11.32611)) |
| Wikidata | [Q124617073](https://www.wikidata.org/wiki/Q124617073) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Weimar |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 15, road 276, building 420, waterway 3, zone 6, wall 58).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 72, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/198265034 historic=castle Q1730975 243 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 420 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 242 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.98194/11.32611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=2; wikidata:Q124617073 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/reste-der-stadtbefestigung-weimar-q124617073.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
