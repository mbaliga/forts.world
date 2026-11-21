# Akershus Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `akershus-fortress-q644464` |
| Coordinates | 59.90661, 10.73625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.90661/10.73625)) |
| Wikidata | [Q644464](https://www.wikidata.org/wiki/Q644464) (CC0) |
| Wikidata class | castle |
| Types | heritage site\|castle\|museum\|fortification\|fortress\|headquarters |
| Administrative area | Oslo Municipality |
| Inception | 1300 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 37 |
| OSM `historic` | castle |
| OSM `heritage` | yes |
| OSM `website` | https://kultur.forsvaret.no/museer/akershus-slott |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 33, road 148, wall 25, zone 27, water 2, building 39, cliff 1, waterway 3, coastline 5, retaining-wall 2).

Evidence: documented 0, mapped 286, inferred 0, derived 1; heights documented 25, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13931023 historic=castle Q644464 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":548,"medianInside":0,"medianOutside":7.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.90661/10.73625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; heritage site\|castle\|museum\|fortification\|fortress\|headquarters; sitelinks=37; wikidata:Q644464 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/akershus-fortress-q644464.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
