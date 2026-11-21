# Palais Schwarzenberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-schwarzenberg-q651030` |
| Coordinates | 48.1969, 16.37693 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1969/16.37693)) |
| Wikidata | [Q651030](https://www.wikidata.org/wiki/Q651030) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|city palace |
| Administrative area | Landstraße |
| Inception | 1728 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | Baroque palace owned by the princely Schwarzenberg family. Completed in 1728. Source: Wikipedia:en |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 8, road 310, building 80, wall 22, zone 48, waterway 1, retaining-wall 5).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 68, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5541555 historic=castle Q651030 19 m from ledger point
- roads capped: kept the 150 longest of 310 mapped (trace size budget); minor lanes are not drawn
- origin moved 37 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1969/16.37693) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|city palace; sitelinks=16; wikidata:Q651030 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/palais-schwarzenberg-q651030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
