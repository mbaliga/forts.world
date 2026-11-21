# Craigraploch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `craigraploch-q31058942` |
| Coordinates | 54.77467, -3.98417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.77467/-3.98417)) |
| Wikidata | [Q31058942](https://www.wikidata.org/wiki/Q31058942) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|contour fort |
| Administrative area | Dumfries and Galloway |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/SM1064 |

## What the model contains

Tier **T1**, status `outline+walls`, 11 elements (outline 1, coastline 1, road 4, wall 5).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1261827325 historic=archaeological_site Q31058942 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.77467/-3.98417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|contour fort; sitelinks=0; wikidata:Q31058942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 11 elements); data/traces/craigraploch-q31058942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
