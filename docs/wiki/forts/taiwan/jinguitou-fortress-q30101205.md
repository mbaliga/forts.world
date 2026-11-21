# Jinguitou Fortress

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jinguitou-fortress-q30101205` |
| Coordinates | 23.56328, 119.55774 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.56328/119.55774)) |
| Wikidata | [Q30101205](https://www.wikidata.org/wiki/Q30101205) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Magong City |
| Inception | 1864 |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, marker 2, road 28, zone 1, wall 2, coastline 1, building 10, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/687283761 historic=yes Q107418614 627 m from ledger point
- origin moved 628 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":11,"medianInside":4.3,"medianOutside":11.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.56328/119.55774) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q30101205 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/jinguitou-fortress-q30101205.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
