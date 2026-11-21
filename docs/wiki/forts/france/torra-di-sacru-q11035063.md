# Torra di Sacru

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-sacru-q11035063` |
| Coordinates | 42.79474, 9.49105 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.79474/9.49105)) |
| Wikidata | [Q11035063](https://www.wikidata.org/wiki/Q11035063) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|Genoese towers in Corsica |
| Administrative area | Brando |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, coastline 1, road 6, building 3, waterway 1, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1457834456 historic=ruins Q11035063 0 m from ledger point
- sea-0: DEM check ok {"cells":232,"medianInside":0,"medianOutside":23.3}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.79474/9.49105) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|Genoese towers in Corsica; sitelinks=3; wikidata:Q11035063 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/torra-di-sacru-q11035063.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
