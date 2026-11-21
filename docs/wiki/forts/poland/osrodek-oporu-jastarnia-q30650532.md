# Ośrodek Oporu Jastarnia

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `osrodek-oporu-jastarnia-q30650532` |
| Coordinates | 54.71622, 18.63568 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.71622/18.63568)) |
| Wikidata | [Q30650532](https://www.wikidata.org/wiki/Q30650532) (CC0) |
| Wikidata class | fort |
| Types | fortification\|building complex |
| Administrative area | Jastarnia |
| Inception | 1939 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | bunker |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, coastline 2, road 21, building 3, waterway 5, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/342129022 historic=ruins 130 m from ledger point
- origin moved 130 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":110,"medianInside":-3.1,"medianOutside":3.1}
- 302 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.71622/18.63568) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|building complex; sitelinks=1; wikidata:Q30650532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/osrodek-oporu-jastarnia-q30650532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
