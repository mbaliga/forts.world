# Poype de Villars-les-Dombes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `poype-de-villars-les-dombes-q3401026` |
| Coordinates | 46.0032, 5.02951 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0032/5.02951)) |
| Wikidata | [Q3401026](https://www.wikidata.org/wiki/Q3401026) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Villars-les-Dombes |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `heritage` | 2 |
| OSM `ruins` | tower;yes |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 2, road 100, waterway 1, building 351, zone 3, wall 2).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1034790777 historic=(none; chosen by its Wikidata id) Q3401026 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- 1558 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0032/5.02951) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=2; wikidata:Q3401026 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 226 elements); data/traces/poype-de-villars-les-dombes-q3401026.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 229 elements; outline osm:way/1034790777 historic=(none; chosen by its Wikidata id) Q3401026 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
