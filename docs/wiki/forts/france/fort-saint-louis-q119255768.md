# Fort Saint-Louis

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-louis-q119255768` |
| Coordinates | 48.36939, -4.75968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.36939/-4.75968)) |
| Wikidata | [Q119255768](https://www.wikidata.org/wiki/Q119255768) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Le Conquet |
| Inception | 1850 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, building 3, road 25, retaining-wall 1, coastline 1).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2393603 historic=fort 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.36939/-4.75968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=1; wikidata:Q119255768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/fort-saint-louis-q119255768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
