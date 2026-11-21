# Rosendal Palace

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rosendal-palace-q59482` |
| Coordinates | 59.32891, 18.11733 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32891/18.11733)) |
| Wikidata | [Q59482](https://www.wikidata.org/wiki/Q59482) (CC0) |
| Wikidata class | castle |
| Types | castle\|maison de plaisance\|architectural ensemble\|historic house museum\|royal palace |
| Administrative area | Stockholm Municipality |
| Inception | 1827 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `website` | https://www.kungligaslotten.se/vara-besoksmal/rosendals-slott.html |

## What the model contains

Tier **T1**, status `outline-only`, 71 elements (outline 1, road 45, building 19, coastline 2, zone 3, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 6, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145662484 historic=castle Q59482 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":54,"medianInside":4.3,"medianOutside":21.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32891/18.11733) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|maison de plaisance\|architectural ensemble\|historic house museum\|royal palace; sitelinks=19; wikidata:Q59482 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 71 elements); data/traces/rosendal-palace-q59482.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
