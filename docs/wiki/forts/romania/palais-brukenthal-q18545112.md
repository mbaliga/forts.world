# palais Brukenthal

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-brukenthal-q18545112` |
| Coordinates | 45.79638, 24.15038 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.79638/24.15038)) |
| Wikidata | [Q18545112](https://www.wikidata.org/wiki/Q18545112) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Sibiu |
| Inception | 1778 |
| Designations | Historic Monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `website` | http://www.brukenthalmuseum.ro/ |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 19, road 116, building 168, zone 5, waterway 1, wall 5).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 110, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6565010 historic=castle Q18545112 4 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.79638/24.15038) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=6; wikidata:Q18545112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/palais-brukenthal-q18545112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
