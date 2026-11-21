# Tarbert Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tarbert-castle-q1754745` |
| Coordinates | 55.8636, -5.40861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.8636/-5.40861)) |
| Wikidata | [Q1754745](https://www.wikidata.org/wiki/Q1754745) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/SM3410 |

## What the model contains

Tier **T1**, status `outline-only`, 86 elements (outline 1, coastline 3, road 19, building 61, zone 1, water 1).

Evidence: documented 0, mapped 86, inferred 0, derived 1; heights documented 0, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243949451 historic=castle Q1754745 65 m from ledger point
- origin moved 68 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":339,"medianInside":3,"medianOutside":20.2}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.8636/-5.40861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1754745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 86 elements); data/traces/tarbert-castle-q1754745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
