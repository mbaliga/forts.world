# Tour de Palmata

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-palmata-q22940048` |
| Coordinates | 43.89801, 1.89672 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.89801/1.89672)) |
| Wikidata | [Q22940048](https://www.wikidata.org/wiki/Q22940048) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Gaillac |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 208 elements (outline 1, waterway 1, water 1, road 85, building 343).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62590975 historic=castle Q15944342 359 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 343 mapped (trace size budget); the rest of the town is not drawn
- origin moved 359 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.89801/1.89672) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22940048 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 208 elements); data/traces/tour-de-palmata-q22940048.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
