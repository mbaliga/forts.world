# Castrum Anderitum

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castrum-anderitum-q943660` |
| Coordinates | 50.8193, 0.3329 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8193/0.3329)) |
| Wikidata | [Q943660](https://www.wikidata.org/wiki/Q943660) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|ruins\|castrum\|ancient Roman structure |
| Administrative area | Pevensey |
| Inception | 0290 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, marker 2, road 49, waterway 6, zone 11, building 14, wall 21, water 1).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 2, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1314440380 historic=castle Q113646324 117 m from ledger point
- origin moved 117 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8193/0.3329) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|ruins\|castrum\|ancient Roman structure; sitelinks=8; wikidata:Q943660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/castrum-anderitum-q943660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
