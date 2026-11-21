# Enceinte de la haute ville de Granville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-de-la-haute-ville-de-granville-q19753098` |
| Coordinates | 48.8369, -1.60306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8369/-1.60306)) |
| Wikidata | [Q19753098](https://www.wikidata.org/wiki/Q19753098) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Granville |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |
| OSM `description` | Four à rougir les boulets |

## What the model contains

Tier **T1**, status `outline+walls`, 119 elements (outline 1, marker 1, road 44, cliff 1, building 36, wall 4, coastline 3, retaining-wall 5, zone 19, waterway 1, water 4).

Evidence: documented 0, mapped 119, inferred 0, derived 3; heights documented 3, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/266145769 historic=yes Q22963250 696 m from ledger point
- origin moved 696 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":0,"medianOutside":0.3}
- sea-1: DEM check ok {"cells":191,"medianInside":0,"medianOutside":22.7}
- sea-2: DEM check failed {"cells":2,"medianInside":2.7,"medianOutside":0.3}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8369/-1.60306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=2; wikidata:Q19753098 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 119 elements); data/traces/enceinte-de-la-haute-ville-de-granville-q19753098.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
