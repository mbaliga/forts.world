# Enceinte romaine Clermont-Ferrand

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-romaine-clermont-ferrand-q57783491` |
| Coordinates | 45.77972, 3.08524 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.77972/3.08524)) |
| Wikidata | [Q57783491](https://www.wikidata.org/wiki/Q57783491) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Clermont-Ferrand |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 4, road 318, building 596, zone 8, retaining-wall 8, wall 6, water 1).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 81, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/67518704 historic=yes Q3145837 178 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 596 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 318 mapped (trace size budget); minor lanes are not drawn
- origin moved 178 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.77972/3.08524) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q57783491 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/enceinte-romaine-clermont-ferrand-q57783491.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
