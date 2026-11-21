# Baimiweng Fort

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baimiweng-fort-q15923657` |
| Coordinates | 25.1556, 121.743 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.1556/121.743)) |
| Wikidata | [Q15923657](https://www.wikidata.org/wiki/Q15923657) (CC0) |
| Wikidata class | fort |
| Types | fort\|Keelung City cultural heritage |
| Administrative area | Keelung |
| Designations | county-level monument |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `description` | 位於荷蘭城 Dutch Fort遺址 |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, coastline 3, road 32, wall 1, water 2, building 2).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367863188 historic=fort Q15923657 18 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":61,"medianInside":0.5,"medianOutside":50.6}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.1556/121.743) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|Keelung City cultural heritage; sitelinks=5; wikidata:Q15923657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/baimiweng-fort-q15923657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
