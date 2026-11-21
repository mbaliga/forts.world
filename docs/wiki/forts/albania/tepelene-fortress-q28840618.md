# Tepelenë Fortress

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tepelene-fortress-q28840618` |
| Coordinates | 40.29889, 20.02139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.29889/20.02139)) |
| Wikidata | [Q28840618](https://www.wikidata.org/wiki/Q28840618) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gjirokastër County |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 4, waterway 1, road 129, building 213, zone 3, wall 9).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 0, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14211590 historic=castle Q28840618 10 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 5625 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.29889/20.02139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q28840618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/tepelene-fortress-q28840618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
