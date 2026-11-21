# Remparts de Courthézon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-courthezon-q22919125` |
| Coordinates | 44.0866, 4.88245 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.0866/4.88245)) |
| Wikidata | [Q22919125](https://www.wikidata.org/wiki/Q22919125) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Courthézon |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 3, road 194, waterway 10, building 790, water 4, zone 10, wall 55).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 1, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/76241228 historic=citywalls 190 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 790 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 191 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.0866/4.88245) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q22919125 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/remparts-de-courthezon-q22919125.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
