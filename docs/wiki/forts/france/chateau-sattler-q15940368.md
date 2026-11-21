# Château Sattler

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-sattler-q15940368` |
| Coordinates | 47.5034, 6.84112 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.5034/6.84112)) |
| Wikidata | [Q15940368](https://www.wikidata.org/wiki/Q15940368) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Exincourt |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 156 elements (outline 1, road 68, waterway 1, building 82, water 1, zone 2, wall 1).

Evidence: documented 0, mapped 156, inferred 0, derived 0; heights documented 0, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203582110 historic=manor Q15940368 9 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.5034/6.84112) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q15940368 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 156 elements); data/traces/chateau-sattler-q15940368.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 156 elements; outline osm:way/203582110 historic=manor Q15940368 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
