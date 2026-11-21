# Torretta del Bagno

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torretta-del-bagno-q3995709` |
| Coordinates | 43.04738, 9.84646 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.04738/9.84646)) |
| Wikidata | [Q3995709](https://www.wikidata.org/wiki/Q3995709) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Capraia Isola |
| Inception | 1790 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 74 elements (outline 1, marker 2, road 13, building 50, cliff 1, wall 2, coastline 2, zone 2, water 1).

Evidence: documented 0, mapped 74, inferred 0, derived 1; heights documented 0, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/323321797 historic=ruins Q3995709 0 m from ledger point
- sea-0: DEM check ok {"cells":187,"medianInside":0,"medianOutside":38.7}
- 24 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.04738/9.84646) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=3; wikidata:Q3995709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 74 elements); data/traces/torretta-del-bagno-q3995709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
