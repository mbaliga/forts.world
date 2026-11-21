# Gwandeokjeong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gwandeokjeong-q12584901` |
| Coordinates | 33.51395, 126.52215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.51395/126.52215)) |
| Wikidata | [Q12584901](https://www.wikidata.org/wiki/Q12584901) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|historic building |
| Inception | 1749 |
| Designations | Treasure of the Republic of Korea |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, marker 3, road 575, building 679, coastline 1, waterway 1, water 2, wall 5, zone 115).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 21, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1537196430 historic=castle Q12584901 13 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 679 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 575 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.51395/126.52215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|historic building; sitelinks=2; wikidata:Q12584901 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/gwandeokjeong-q12584901.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
