# Château de Saché

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-sache-q2054341` |
| Coordinates | 47.24583, 0.54444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.24583/0.54444)) |
| Wikidata | [Q2054341](https://www.wikidata.org/wiki/Q2054341) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Saché |
| Designations | classified historical monument\|Maisons des Illustres\|monument historique inscrit |
| Wikipedia language editions | 13 |
| OSM `heritage` | 2 |
| OSM `website` | https://www.musee-balzac.fr/ |

## What the model contains

Tier **T1**, status `outline-only`, 152 elements (outline 1, road 36, zone 3, waterway 4, building 107, water 1).

Evidence: documented 0, mapped 152, inferred 0, derived 0; heights documented 0, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68962958 historic=(none; chosen by its Wikidata id) Q2054341 19 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.24583/0.54444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=13; wikidata:Q2054341 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 160 elements); data/traces/chateau-de-sache-q2054341.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 152 elements; outline osm:way/68962958 historic=(none; chosen by its Wikidata id) Q2054341 19 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
