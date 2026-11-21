# Jedburgh Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jedburgh-castle-q1602945` |
| Coordinates | 55.4742, -2.55902 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.4742/-2.55902)) |
| Wikidata | [Q1602945](https://www.wikidata.org/wiki/Q1602945) (CC0) |
| Wikidata class | castle |
| Types | castle\|prison\|museum\|local authority museum |
| Administrative area | Scottish Borders |
| Inception | 1100 |
| Designations | category A listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `website` | https://www.scotborders.gov.uk/directory_record/10705/jedburgh_castle_jail_and_museum |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 1, road 46, wall 7, water 2, zone 14, waterway 3, building 53, retaining-wall 2).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 5, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14699451 historic=castle Q1602945 2 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.4742/-2.55902) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|prison\|museum\|local authority museum; sitelinks=6; wikidata:Q1602945 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/jedburgh-castle-q1602945.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
