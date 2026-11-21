# Fort Pianelloni

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pianelloni-q89207746` |
| Coordinates | 44.08803, 9.88628 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.08803/9.88628)) |
| Wikidata | [Q89207746](https://www.wikidata.org/wiki/Q89207746) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 120 elements (outline 1, road 25, coastline 1, zone 3, building 85, waterway 5).

Evidence: documented 0, mapped 120, inferred 0, derived 0; heights documented 0, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1104396403 historic=fort Q89207746 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.08803/9.88628) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q89207746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 120 elements); data/traces/fort-pianelloni-q89207746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
