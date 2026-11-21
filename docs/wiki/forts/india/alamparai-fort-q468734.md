# Alamparai Fort

> India · Chengalpattu district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alamparai-fort-q468734` |
| Coordinates | 12.2659, 80.0101 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.2659/80.0101)) |
| Wikidata | [Q468734](https://www.wikidata.org/wiki/Q468734) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Chengalpattu district |
| Inception | 1735 |
| Designations | State Protected Monument |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence high, significance rank 424; sources wikidata:Q468734;smith-newton:r224 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, water 2, road 4, waterway 2, coastline 1, zone 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/555491612 historic=ruins Q468734 50 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":37,"medianInside":0.2,"medianOutside":5.7}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.2659/80.0101) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 2/10), checked against all other batch files at push time. type=fort; confidence=high; rank=424; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/alamparai-fort-q468734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
