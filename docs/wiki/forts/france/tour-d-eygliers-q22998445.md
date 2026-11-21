# Tour d'Eygliers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-d-eygliers-q22998445` |
| Coordinates | 44.6606, 6.6493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.6606/6.6493)) |
| Wikidata | [Q22998445](https://www.wikidata.org/wiki/Q22998445) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Guillestre |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 256 elements (outline 1, marker 2, road 127, zone 4, building 423, waterway 1, retaining-wall 1).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181934942 historic=yes Q22998445 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 423 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.6606/6.6493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22998445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 256 elements); data/traces/tour-d-eygliers-q22998445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
