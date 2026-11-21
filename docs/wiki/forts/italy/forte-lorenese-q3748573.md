# Forte Lorenese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-lorenese-q3748573` |
| Coordinates | 43.95952, 10.16964 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.95952/10.16964)) |
| Wikidata | [Q3748573](https://www.wikidata.org/wiki/Q3748573) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Forte dei Marmi |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 156 elements (outline 1, road 34, coastline 1, building 517).

Evidence: documented 0, mapped 156, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/694076297 historic=building 268 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 517 mapped (trace size budget); the rest of the town is not drawn
- origin moved 267 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.95952/10.16964) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 156 elements); data/traces/forte-lorenese-q3748573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
