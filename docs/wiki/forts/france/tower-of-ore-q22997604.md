# Tower of Ore

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-ore-q22997604` |
| Coordinates | 43.02623, -0.42732 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.02623/-0.42732)) |
| Wikidata | [Q22997604](https://www.wikidata.org/wiki/Q22997604) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Gère-Bélesten |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 2, zone 5, road 34, building 74, waterway 1, wall 1).

Evidence: documented 0, mapped 118, inferred 0, derived 0; heights documented 0, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284742883 historic=(none; chosen by its Wikidata id) Q22997604 4 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.02623/-0.42732) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22997604 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 118 elements); data/traces/tower-of-ore-q22997604.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 118 elements; outline osm:way/284742883 historic=(none; chosen by its Wikidata id) Q22997604 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
