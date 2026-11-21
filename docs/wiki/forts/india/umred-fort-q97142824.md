# Umred Fort

> India · Nagpur district · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `umred-fort-q97142824` |
| Coordinates | 20.857778, 79.319444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/20.857778/79.319444)) |
| Wikidata | [Q97142824](https://www.wikidata.org/wiki/Q97142824) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Nagpur district |
| Designations | State Protected Monument |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence high, significance rank 895; sources wikidata:Q97142824;smith-newton:r1908 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, road 15, water 1, zone 1, building 1).

Evidence: documented 0, mapped 19, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/968095157 historic=fort 26 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/20.857778/79.319444) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

src/levels/umred-fort-q97142824.trace.js (curation tools/trace/curation/umred-fort-q97142824.mjs), level src/levels/umred-fort-q97142824.js; eras 16th c. (strip carried back, inferred; builder and date are uncited belief) and today. OSM way 968095157 strip 199 x 58 m (8,238 m2); lake with derived level, temple, farmland, 15 roads. Five bastions (Durgbharari) not placed. Geometry first failed (osm:false), re-fetched 2026-11-14. Research: docs/research/umred-pass.md. Next: a survey with the bastion positions. Alpha-U batch (2026-11-11): 10 forts across A-Z starting at U, work order 1/10; distinct from batch 0 and alpha-I/K/L/T/V/X.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
