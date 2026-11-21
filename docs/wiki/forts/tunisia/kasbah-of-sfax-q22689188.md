# Kasbah of Sfax

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasbah-of-sfax-q22689188` |
| Coordinates | 34.7335, 10.7588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.7335/10.7588)) |
| Wikidata | [Q22689188](https://www.wikidata.org/wiki/Q22689188) (CC0) |
| Wikidata class | castle |
| Types | kasbah |
| Administrative area | Sfax |
| Inception | 0900 |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 164 elements (outline 1, marker 8, road 436, building 326, zone 5, wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 164, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13674341 historic=citywalls Q22948835 286 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 25 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 120 longest of 436 mapped (trace size budget); minor lanes are not drawn
- origin moved 286 m from the ledger point to the outline centroid
- 215 DEM cells below -3 m (bathymetry) clamped to -3 m
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.7335/10.7588) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=castle; kasbah; sitelinks=5; wikidata:Q22689188 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 643 elements); data/traces/kasbah-of-sfax-q22689188.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
