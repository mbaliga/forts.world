# Carnuntum

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carnuntum-q508815` |
| Coordinates | 48.11333, 16.86139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.11333/16.86139)) |
| Wikidata | [Q508815](https://www.wikidata.org/wiki/Q508815) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|municipium\|archaeological site\|open-air museum |
| Administrative area | Lower Austria |
| Wikipedia language editions | 43 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | https://whc.unesco.org/en/list/1608 |
| OSM `barrier` | fence |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 3, road 163, building 193, zone 23, water 1, wall 58, retaining-wall 1).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 0, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62019490 historic=archaeological_site Q508815 61 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 193 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 163 mapped (trace size budget); minor lanes are not drawn
- origin moved 61 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.11333/16.86139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|municipium\|archaeological site\|open-air museum; sitelinks=43; wikidata:Q508815 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/carnuntum-q508815.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
