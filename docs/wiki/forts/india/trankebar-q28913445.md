# Trankebar

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trankebar-q28913445` |
| Coordinates | 11.0325, 79.85306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.0325/79.85306)) |
| Wikidata | [Q28913445](https://www.wikidata.org/wiki/Q28913445) (CC0) |
| Wikidata class | fort |
| Types | fortification\|colony |
| Inception | 1620 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, coastline 1, road 20, waterway 1, water 2, building 121, wall 7).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/365524127 historic=building 547 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 549 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.0325/79.85306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|colony; sitelinks=3; wikidata:Q28913445; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/trankebar-q28913445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
