# Fort McKinley

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mckinley-q22059370` |
| Coordinates | 43.67917, -70.19722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.67917/-70.19722)) |
| Wikidata | [Q22059370](https://www.wikidata.org/wiki/Q22059370) (CC0) |
| Wikidata class | fort |
| Types | artillery fort |
| Administrative area | Maine |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, road 5, coastline 1, water 2).

Evidence: documented 0, mapped 9, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/924396459 historic=castle 668 m from ledger point
- origin moved 667 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":93,"medianInside":-18,"medianOutside":22.5}
- sea-1: DEM check ok {"cells":17,"medianInside":-15.3,"medianOutside":16.8}
- 645 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.67917/-70.19722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort; sitelinks=1; wikidata:Q22059370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/fort-mckinley-q22059370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
