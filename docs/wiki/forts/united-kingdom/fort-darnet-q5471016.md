# Fort Darnet

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-darnet-q5471016` |
| Coordinates | 51.40667, 0.59694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.40667/0.59694)) |
| Wikidata | [Q5471016](https://www.wikidata.org/wiki/Q5471016) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Medway |
| Inception | 1870 |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, waterway 2, coastline 1, water 1, zone 4).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122051577 historic=fort Q5471016 42 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.40667/0.59694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5471016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/fort-darnet-q5471016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
