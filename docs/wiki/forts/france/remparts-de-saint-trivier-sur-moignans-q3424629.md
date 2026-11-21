# Remparts de Saint-Trivier-sur-Moignans

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-saint-trivier-sur-moignans-q3424629` |
| Coordinates | 46.0705, 4.898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0705/4.898)) |
| Wikidata | [Q3424629](https://www.wikidata.org/wiki/Q3424629) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Saint-Trivier-sur-Moignans |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 3, road 50, zone 5, building 282, waterway 1, wall 2).

Evidence: documented 0, mapped 344, inferred 0, derived 0; heights documented 0, inferred 0, unknown 284.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247143833 historic=(none; chosen by its Wikidata id) Q3424629 27 m from ledger point
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0705/4.898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 315 elements); data/traces/remparts-de-saint-trivier-sur-moignans-q3424629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 344 elements; outline osm:way/247143833 historic=(none; chosen by its Wikidata id) Q3424629 27 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
