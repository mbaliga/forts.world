# Angelochori Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `angelochori-fortress-q95151300` |
| Coordinates | 40.50151, 22.81798 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.50151/22.81798)) |
| Wikidata | [Q95151300](https://www.wikidata.org/wiki/Q95151300) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Thermaikos Municipality |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, road 10, zone 2, coastline 1, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/19962651 historic=ruins Q95151300 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":164,"medianInside":0,"medianOutside":17.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.50151/22.81798) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q95151300 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/angelochori-fortress-q95151300.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
