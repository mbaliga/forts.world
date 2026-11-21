# Alesia

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alesia-q835966` |
| Coordinates | 47.53917, 4.50056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.53917/4.50056)) |
| Wikidata | [Q835966](https://www.wikidata.org/wiki/Q835966) (CC0) |
| Wikidata class | fortification |
| Types | oppidum\|vicus\|archaeological site |
| Administrative area | Alise-Sainte-Reine |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 34 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 53 elements (outline 1, marker 3, road 25, zone 17, building 7).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95806570 historic=archaeological_site Q835966 20 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.53917/4.50056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum\|vicus\|archaeological site; sitelinks=34; wikidata:Q835966 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 53 elements); data/traces/alesia-q835966.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
