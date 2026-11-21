# Rhamnous

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rhamnous-q1768553` |
| Coordinates | 38.21935, 24.02686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.21935/24.02686)) |
| Wikidata | [Q1768553](https://www.wikidata.org/wiki/Q1768553) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|deme\|archaeological site |
| Administrative area | Marathonas Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 17 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, marker 2, coastline 1, road 17, building 2, waterway 4, cliff 3, zone 1, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/130045224 historic=archaeological_site Q1768553 111 m from ledger point
- origin moved 106 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":194,"medianInside":0,"medianOutside":70.6}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.21935/24.02686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|deme\|archaeological site; sitelinks=17; wikidata:Q1768553 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/rhamnous-q1768553.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
