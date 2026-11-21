# Montjuïc Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `montjuic-castle-q2500125` |
| Coordinates | 41.36342, 2.16617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.36342/2.16617)) |
| Wikidata | [Q2500125](https://www.wikidata.org/wiki/Q2500125) (CC0) |
| Wikidata class | castle |
| Types | castle\|prison\|Monument (Spain)\|military museum\|memorial |
| Administrative area | El Poble-sec |
| Inception | 1641 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `website` | https://ajuntament.barcelona.cat/castelldemontjuic/ca |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 14, coastline 1, road 229, retaining-wall 10, zone 43, building 19, cliff 2, wall 10).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 14, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19658818 historic=castle Q2500125 88 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.36342/2.16617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|prison\|Monument (Spain)\|military museum\|memorial; sitelinks=17; wikidata:Q2500125 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/montjuic-castle-q2500125.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
