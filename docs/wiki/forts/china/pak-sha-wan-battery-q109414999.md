# Pak Sha Wan Battery

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pak-sha-wan-battery-q109414999` |
| Coordinates | 22.2805, 114.23839 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.2805/114.23839)) |
| Wikidata | [Q109414999](https://www.wikidata.org/wiki/Q109414999) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Hong Kong |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://www.lcsd.gov.hk/camp/b5/p_lymp.php |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, road 105, building 71, wall 2, zone 6, cliff 20, coastline 2, water 1).

Evidence: documented 0, mapped 208, inferred 0, derived 1; heights documented 27, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/557930264 historic=fort Q16868552 509 m from ledger point
- origin moved 508 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":9.1,"medianOutside":52.3}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.2805/114.23839) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q109414999 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 208 elements); data/traces/pak-sha-wan-battery-q109414999.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
