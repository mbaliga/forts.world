# Fort of Trafaria

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-trafaria-q10283849` |
| Coordinates | 38.67382, -9.23033 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.67382/-9.23033)) |
| Wikidata | [Q10283849](https://www.wikidata.org/wiki/Q10283849) (CC0) |
| Wikidata class | fort |
| Types | prison\|cultural heritage\|fort |
| Administrative area | Caparica e Trafaria |
| Designations | heritage without legal protection |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | http://monumentos.pt/Site/APP_PagesUser/SIPA.aspx?id=32962 |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 1, coastline 14, road 60, building 129, wall 3, waterway 2, retaining-wall 2, water 3).

Evidence: documented 0, mapped 215, inferred 0, derived 2; heights documented 2, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11250836 historic=fort 44 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":576,"medianInside":6.8,"medianOutside":null}
- sea-1: DEM check ok {"cells":235,"medianInside":0,"medianOutside":16}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.67382/-9.23033) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; prison\|cultural heritage\|fort; sitelinks=3; wikidata:Q10283849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/fort-of-trafaria-q10283849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
