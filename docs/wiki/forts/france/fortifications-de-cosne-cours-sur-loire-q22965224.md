# Fortifications de Cosne-Cours-sur-Loire

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-de-cosne-cours-sur-loire-q22965224` |
| Coordinates | 47.41226, 2.92439 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.41226/2.92439)) |
| Wikidata | [Q22965224](https://www.wikidata.org/wiki/Q22965224) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cosne-Cours-sur-Loire |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 302 elements (marker 2, waterway 20, road 147, building 693, water 1, zone 2, wall 8, retaining-wall 2).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2072629 historic=castle 185 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (54 x 50 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 693 mapped (trace size budget); the rest of the town is not drawn
- origin moved 186 m from the ledger point to the centre of the mapped site
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.41226/2.92439) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q22965224 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 302 elements); data/traces/fortifications-de-cosne-cours-sur-loire-q22965224.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
