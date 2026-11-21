# Shimotsui Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shimotsui-castle-q11361097` |
| Coordinates | 34.44057, 133.79562 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.44057/133.79562)) |
| Wikidata | [Q11361097](https://www.wikidata.org/wiki/Q11361097) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kurashiki |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, road 11, coastline 1, building 15).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/353640321 historic=ruins 476 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 476 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.44057/133.79562) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=2; wikidata:Q11361097 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/shimotsui-castle-q11361097.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
