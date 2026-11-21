# Podskale Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `podskale-castle-q9386549` |
| Coordinates | 51.0839, 15.4608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0839/15.4608)) |
| Wikidata | [Q9386549](https://www.wikidata.org/wiki/Q9386549) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rząsiny |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |
| OSM `barrier` | wall |
| OSM `website` | https://www.zamki.pl/?idzamku=podskale |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, road 22, building 20, zone 1).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 1, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220061580 historic=castle Q9386549 23 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0839/15.4608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q9386549 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/podskale-castle-q9386549.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
