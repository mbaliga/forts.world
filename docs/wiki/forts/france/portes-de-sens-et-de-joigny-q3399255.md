# Portes de Sens et de Joigny

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portes-de-sens-et-de-joigny-q3399255` |
| Coordinates | 48.0851, 3.29509 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.0851/3.29509)) |
| Wikidata | [Q3399255](https://www.wikidata.org/wiki/Q3399255) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Villeneuve-sur-Yonne |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 176 elements (outline 1, road 45, building 555, waterway 9, water 1).

Evidence: documented 0, mapped 176, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210075483 historic=building 301 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 555 mapped (trace size budget); the rest of the town is not drawn
- origin moved 301 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.0851/3.29509) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3399255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 176 elements); data/traces/portes-de-sens-et-de-joigny-q3399255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
