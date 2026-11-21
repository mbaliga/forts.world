# Enceinte de Vabre

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-de-vabre-q22969338` |
| Coordinates | 43.69319, 2.42596 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.69319/2.42596)) |
| Wikidata | [Q22969338](https://www.wikidata.org/wiki/Q22969338) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Vabre |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 4, road 73, building 349, waterway 6, wall 20, water 3, retaining-wall 7).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 3, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/421838340 historic=city_gate Q22969338 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.69319/2.42596) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=1; wikidata:Q22969338 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 234 elements); data/traces/enceinte-de-vabre-q22969338.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 234 elements; outline osm:way/421838340 historic=city_gate Q22969338 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
