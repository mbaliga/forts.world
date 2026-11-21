# Burgruine Rummelsberg

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgruine-rummelsberg-q92468010` |
| Coordinates | 50.70234, 17.11012 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.70234/17.11012)) |
| Wikidata | [Q92468010](https://www.wikidata.org/wiki/Q92468010) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, road 37, building 1, wall 6).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1567176929 historic=castle 12 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.70234/17.11012) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=1; wikidata:Q92468010 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/burgruine-rummelsberg-q92468010.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
