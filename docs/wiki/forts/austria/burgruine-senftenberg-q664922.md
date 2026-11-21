# Burgruine Senftenberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgruine-senftenberg-q664922` |
| Coordinates | 48.44768, 15.56499 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.44768/15.56499)) |
| Wikidata | [Q664922](https://www.wikidata.org/wiki/Q664922) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle ruin |
| Administrative area | Senftenberg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.burgruinesenftenberg.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, marker 6, road 56, wall 7, waterway 6, cliff 4, building 45, zone 12, water 3, retaining-wall 2).

Evidence: documented 0, mapped 142, inferred 0, derived 0; heights documented 0, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143693043 historic=castle Q664922 5 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.44768/15.56499) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle ruin; sitelinks=6; wikidata:Q664922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/burgruine-senftenberg-q664922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
