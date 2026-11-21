# Brody Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brody-castle-q1989520` |
| Coordinates | 50.08556, 25.13778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08556/25.13778)) |
| Wikidata | [Q1989520](https://www.wikidata.org/wiki/Q1989520) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Brody |
| Designations | architectural monument of national significance of Ukraine |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `description` | палац, бастіони з казематами 1630-1635 рр |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, road 55, building 124, wall 3, zone 7, waterway 2, water 2).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 4, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260137675 historic=fort Q1989520 77 m from ledger point
- origin moved 75 m from the ledger point to the outline centroid
- 35 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08556/25.13778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1989520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/brody-castle-q1989520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
