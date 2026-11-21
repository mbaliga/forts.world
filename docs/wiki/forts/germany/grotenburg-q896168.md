# Grotenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grotenburg-q896168` |
| Coordinates | 51.91193, 8.83908 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.91193/8.83908)) |
| Wikidata | [Q896168](https://www.wikidata.org/wiki/Q896168) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|mountain |
| Administrative area | Detmold |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 10, road 102, zone 10, building 12, wall 14, retaining-wall 4).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 5, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207366382 historic=yes 42 m from ledger point
- origin moved 42 m from the ledger point to the centre of the mapped site
- 75 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.91193/8.83908) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|mountain; sitelinks=7; wikidata:Q896168 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/grotenburg-q896168.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
