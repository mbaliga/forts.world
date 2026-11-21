# Degaby Island

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `degaby-island-q3593057` |
| Coordinates | 43.2775, 5.34417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.2775/5.34417)) |
| Wikidata | [Q3593057](https://www.wikidata.org/wiki/Q3593057) (CC0) |
| Wikidata class | fort |
| Types | island\|fortification |
| Administrative area | Marseille |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.ile-degaby.com/ |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, coastline 6, building 2, road 10, zone 5).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114729218 historic=castle 24 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.2775/5.34417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|fortification; sitelinks=3; wikidata:Q3593057 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 24 elements); data/traces/degaby-island-q3593057.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
