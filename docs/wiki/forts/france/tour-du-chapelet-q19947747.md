# Tour du Chapelet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-du-chapelet-q19947747` |
| Coordinates | 44.2064, 0.61819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.2064/0.61819)) |
| Wikidata | [Q19947747](https://www.wikidata.org/wiki/Q19947747) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Agen |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | https://chateau-des-jacobins.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 172, building 594, waterway 1, zone 9, wall 4).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/65298924 historic=castle 487 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 594 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 487 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.2064/0.61819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q19947747 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/tour-du-chapelet-q19947747.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
