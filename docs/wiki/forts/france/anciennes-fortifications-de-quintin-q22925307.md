# Anciennes fortifications de Quintin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anciennes-fortifications-de-quintin-q22925307` |
| Coordinates | 48.40301, -2.90789 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40301/-2.90789)) |
| Wikidata | [Q22925307](https://www.wikidata.org/wiki/Q22925307) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Quintin |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateaudequintin.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 274 elements (outline 1, marker 4, road 129, water 1, waterway 3, building 485, zone 12, wall 4).

Evidence: documented 0, mapped 274, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31060173 historic=castle Q2378450 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 485 mapped (trace size budget); the rest of the town is not drawn
- origin moved 43 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40301/-2.90789) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q22925307 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 274 elements); data/traces/anciennes-fortifications-de-quintin-q22925307.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
