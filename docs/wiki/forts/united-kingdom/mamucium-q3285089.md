# Mamucium

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mamucium-q3285089` |
| Coordinates | 53.476, -2.25089 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.476/-2.25089)) |
| Wikidata | [Q3285089](https://www.wikidata.org/wiki/Q3285089) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Manchester |
| Wikipedia language editions | 9 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |
| OSM `description` | Site of the Roman fort at Manchester |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 1, road 770, waterway 37, building 197, wall 29, water 10, zone 12, retaining-wall 5).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 50, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/205061197 historic=archaeological_site Q3285089 252 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 197 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 770 mapped (trace size budget); minor lanes are not drawn
- origin moved 254 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.476/-2.25089) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=9; wikidata:Q3285089 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/mamucium-q3285089.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
