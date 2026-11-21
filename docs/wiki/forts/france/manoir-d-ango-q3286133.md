# Manoir d'Ango

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-d-ango-q3286133` |
| Coordinates | 49.90076, 0.99494 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.90076/0.99494)) |
| Wikidata | [Q3286133](https://www.wikidata.org/wiki/Q3286133) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor house |
| Administrative area | Varengeville-sur-Mer |
| Designations | classified historical monument\|Maisons des Illustres |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | http://www.culture.gouv.fr/public/mistral/merimee_fr?ACTION=CHERCHER&FIELD_98=REF&VALUE_98=PA00101077 |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, road 9, building 13, zone 2, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6171091 historic=castle Q3286133 20 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.90076/0.99494) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor house; sitelinks=4; wikidata:Q3286133 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/manoir-d-ango-q3286133.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
