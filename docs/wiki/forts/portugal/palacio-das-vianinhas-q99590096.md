# Palácio das Vianinhas

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-das-vianinhas-q99590096` |
| Coordinates | 38.74433, -9.1453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.74433/-9.1453)) |
| Wikidata | [Q99590096](https://www.wikidata.org/wiki/Q99590096) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|cultural heritage |
| Administrative area | Avenidas Novas |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, road 241, building 152, retaining-wall 4, wall 7, zone 5, water 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 26, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1334842160 historic=castle Q99590096 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 241 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.74433/-9.1453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|cultural heritage; sitelinks=1; wikidata:Q99590096 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/palacio-das-vianinhas-q99590096.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
