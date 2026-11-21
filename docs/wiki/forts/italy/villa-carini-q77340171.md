# Villa Carini

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `villa-carini-q77340171` |
| Coordinates | 45.11335, 9.86681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.11335/9.86681)) |
| Wikidata | [Q77340171](https://www.wikidata.org/wiki/Q77340171) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|villa\|architectural ensemble |
| Administrative area | Castelnuovo Bocca d'Adda |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 176 elements (outline 1, marker 1, road 35, water 1, building 409, wall 5, zone 12, waterway 1).

Evidence: documented 0, mapped 176, inferred 0, derived 0; heights documented 116, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/752825781 historic=castle Q77340171 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 409 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.11335/9.86681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|villa\|architectural ensemble; sitelinks=0; wikidata:Q77340171 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 176 elements); data/traces/villa-carini-q77340171.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
