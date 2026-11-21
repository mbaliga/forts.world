# Suraż Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `suraz-castle-q131286475` |
| Coordinates | 52.94325, 22.94661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.94325/22.94661)) |
| Wikidata | [Q131286475](https://www.wikidata.org/wiki/Q131286475) (CC0) |
| Wikidata class | castle |
| Types | castle\|hillfort\|destroyed building or structure |
| Administrative area | Suraż |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 123 elements (outline 1, marker 2, waterway 1, road 25, building 85, wall 1, cliff 1, water 3, zone 4).

Evidence: documented 0, mapped 123, inferred 0, derived 0; heights documented 2, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/290613586 historic=archaeological_site 10 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.94325/22.94661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hillfort\|destroyed building or structure; sitelinks=1; wikidata:Q131286475 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 123 elements); data/traces/suraz-castle-q131286475.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
