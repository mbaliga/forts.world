# Torre di Caprona

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-caprona-q56720159` |
| Coordinates | 43.7072, 10.50711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7072/10.50711)) |
| Wikidata | [Q56720159](https://www.wikidata.org/wiki/Q56720159) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Vicopisano |
| Inception | 1024 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, road 44, water 1, building 49, waterway 5, cliff 1, wall 6).

Evidence: documented 0, mapped 107, inferred 0, derived 0; heights documented 3, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/239054120 historic=(none; chosen by its Wikidata id) Q56720159 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7072/10.50711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q56720159 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 103 elements); data/traces/torre-di-caprona-q56720159.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 107 elements; outline osm:way/239054120 historic=(none; chosen by its Wikidata id) Q56720159 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
