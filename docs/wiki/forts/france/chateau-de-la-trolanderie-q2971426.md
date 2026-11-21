# Château de la Trolanderie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-trolanderie-q2971426` |
| Coordinates | 45.8675, 4.81917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.8675/4.81917)) |
| Wikidata | [Q2971426](https://www.wikidata.org/wiki/Q2971426) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Poleymieux-au-Mont-d'Or |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, marker 1, road 42, water 3, building 148, zone 12, cliff 1, wall 3).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 0, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183841708 historic=(none; chosen by its Wikidata id) Q2971426 16 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.8675/4.81917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2971426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 126 elements); data/traces/chateau-de-la-trolanderie-q2971426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 211 elements; outline osm:way/183841708 historic=(none; chosen by its Wikidata id) Q2971426 16 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
