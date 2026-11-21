# Kaminoyama Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaminoyama-castle-q847251` |
| Coordinates | 38.1575, 140.27611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.1575/140.27611)) |
| Wikidata | [Q847251](https://www.wikidata.org/wiki/Q847251) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kaminoyama |
| Inception | 1535 |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 7, waterway 2, road 65, building 178, water 2, retaining-wall 11, wall 3, zone 9).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 0, inferred 0, unknown 192.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/553585206 historic=(none; chosen by its Wikidata id) Q847251 11 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.1575/140.27611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=8; wikidata:Q847251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 279 elements); data/traces/kaminoyama-castle-q847251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 278 elements; outline osm:way/553585206 historic=(none; chosen by its Wikidata id) Q847251 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
