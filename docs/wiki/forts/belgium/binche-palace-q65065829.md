# Binche Palace

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `binche-palace-q65065829` |
| Coordinates | 50.40812, 4.16516 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.40812/4.16516)) |
| Wikidata | [Q65065829](https://www.wikidata.org/wiki/Q65065829) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle\|palace |
| Administrative area | Binche |
| Inception | C11;C |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 9, road 89, wall 32, retaining-wall 8, zone 53, building 450).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 0, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209790670 historic=citywalls 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 450 mapped (trace size budget); the rest of the town is not drawn
- origin moved 37 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.40812/4.16516) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle\|palace; sitelinks=4; wikidata:Q65065829 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/binche-palace-q65065829.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
