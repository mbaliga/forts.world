# Ranthambore

> India · Rajasthan · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ranthambore` |
| Coordinates | 26.020278, 76.455 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.020278/76.455)) |
| Programme catalogue | confidence high, significance rank 14; sources catalogue:ranthambore;wikidata:Q2724894;smith-newton:r120 |
| OSM `heritage` | 1 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, marker 3, road 17, water 6, building 24, zone 8, wall 8).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254041053 historic=(none; chosen by siteWay) 138 m from ledger point
- origin moved 137 m from the ledger point to the outline centroid
- 16 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.020278/76.455) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/ranthambore-mapped-forest-pass.md](../../../research/ranthambore-mapped-forest-pass.md)
- [docs/research/ranthambore-pass.md](../../../research/ranthambore-pass.md)

## Ledger note

src/levels/ranthambore.trace.js (curation tools/trace/curation/ranthambore.mjs), level src/levels/ranthambore-t1.js, registered in alpha-x0.js. Outline is OSM way 254041053 (barrier=city_wall, 252 vertices); the default match was a tomb 266 m away, so build options select the wall way. Missing for T2: A plan naming the gates (Navlakha, Hathi Pol, Ganesh Pol, Andheri), the Hammir Mahal, Ganesh temple and Padmala talao; wall heights; finer terrain for the escarpment. Research: docs/research/ranthambore-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
