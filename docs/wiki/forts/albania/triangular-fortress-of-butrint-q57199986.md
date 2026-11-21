# Triangular Fortress of Butrint

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `triangular-fortress-of-butrint-q57199986` |
| Coordinates | 39.7425, 20.02 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.7425/20.02)) |
| Wikidata | [Q57199986](https://www.wikidata.org/wiki/Q57199986) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortification\|military base |
| Administrative area | Vlorë County |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Venetian fortress |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | http://www.butrint.org/explore_14_2.php |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, marker 1, road 16, building 9, wall 8, waterway 4, zone 2).

Evidence: documented 0, mapped 42, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/86816488 historic=castle Q57199986 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.7425/20.02) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortification\|military base; sitelinks=4; wikidata:Q57199986 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/triangular-fortress-of-butrint-q57199986.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
