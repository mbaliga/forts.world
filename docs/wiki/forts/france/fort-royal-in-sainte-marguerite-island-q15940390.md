# Fort Royal in Sainte-Marguerite Island

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-royal-in-sainte-marguerite-island-q15940390` |
| Coordinates | 43.5232, 7.04386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5232/7.04386)) |
| Wikidata | [Q15940390](https://www.wikidata.org/wiki/Q15940390) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cannes |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 87 elements (outline 1, marker 1, coastline 2, road 44, building 32, wall 1, retaining-wall 2, zone 1, cliff 1, water 1).

Evidence: documented 0, mapped 87, inferred 0, derived 1; heights documented 0, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24223636 historic=fort Q15940390 63 m from ledger point
- origin moved 64 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":246,"medianInside":0,"medianOutside":25.6}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5232/7.04386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q15940390 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 87 elements); data/traces/fort-royal-in-sainte-marguerite-island-q15940390.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
