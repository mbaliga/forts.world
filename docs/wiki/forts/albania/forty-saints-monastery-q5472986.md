# Forty Saints Monastery

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forty-saints-monastery-q5472986` |
| Coordinates | 39.87226, 20.02168 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.87226/20.02168)) |
| Wikidata | [Q5472986](https://www.wikidata.org/wiki/Q5472986) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|historic site |
| Administrative area | Vlorë County |
| Inception | 0501 |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, marker 1, road 15, coastline 1, building 2, wall 17).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/439495677 historic=ruins Q5472986 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.87226/20.02168) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|historic site; sitelinks=4; wikidata:Q5472986 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/forty-saints-monastery-q5472986.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
