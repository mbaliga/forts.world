# Enceinte gréco-romaine d'Antibes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-greco-romaine-d-antibes-q15948785` |
| Coordinates | 43.5801, 7.12742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5801/7.12742)) |
| Wikidata | [Q15948785](https://www.wikidata.org/wiki/Q15948785) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Antibes |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.antibes-juanlespins.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 3, road 134, coastline 4, building 660, zone 2, wall 3, retaining-wall 1, water 2).

Evidence: documented 0, mapped 270, inferred 0, derived 2; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68051130 historic=castle Q1368360 109 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 660 mapped (trace size budget); the rest of the town is not drawn
- origin moved 108 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":166,"medianInside":0,"medianOutside":10.9}
- sea-1: DEM check failed {"cells":398,"medianInside":7.9,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5801/7.12742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=2; wikidata:Q15948785 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/enceinte-greco-romaine-d-antibes-q15948785.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
