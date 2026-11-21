# Fort Cézon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-cezon-q54556548` |
| Coordinates | 48.60693, -4.58546 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.60693/-4.58546)) |
| Wikidata | [Q54556548](https://www.wikidata.org/wiki/Q54556548) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Landéda |
| Designations | monument selected by the mission to identify immovable heritage in danger (2018)\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, marker 6, coastline 4, building 10, waterway 1, wall 2, road 8, water 1, zone 4, retaining-wall 2).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254195022 historic=fort Q54556548 48 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 46 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.60693/-4.58546) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q54556548 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/fort-cezon-q54556548.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
