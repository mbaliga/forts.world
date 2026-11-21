# Ortsbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ortsbefestigung-q41232637` |
| Coordinates | 49.68062, 10.02826 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.68062/10.02826)) |
| Wikidata | [Q41232637](https://www.wikidata.org/wiki/Q41232637) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Ochsenfurt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, road 86, waterway 6, wall 10, zone 2, building 337, retaining-wall 1).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 0, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384313663 historic=yes Q98496752 95 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- origin moved 95 m from the ledger point to the centre of the mapped site
- 1599 DEM cells below -3 m (bathymetry) clamped to -3 m
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.68062/10.02826) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q41232637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/ortsbefestigung-q41232637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
