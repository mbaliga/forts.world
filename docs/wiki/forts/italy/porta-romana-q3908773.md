# Porta Romana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-romana-q3908773` |
| Coordinates | 45.45123, 9.20215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45123/9.20215)) |
| Wikidata | [Q3908773](https://www.wikidata.org/wiki/Q3908773) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Milan |
| Inception | 1171 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 193 elements (outline 1, road 99, building 77, wall 12, waterway 1, zone 2, cliff 1).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 21, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/627576529 historic=building Q122336940 618 m from ledger point
- origin moved 621 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45123/9.20215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3908773 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 193 elements); data/traces/porta-romana-q3908773.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
