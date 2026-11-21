# Fort Jesus Museum

> Kenya · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-jesus-museum-q379080` |
| Coordinates | -4.07117, 39.68206 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-4.07117/39.68206)) |
| Wikidata | [Q379080](https://www.wikidata.org/wiki/Q379080) (CC0) |
| Wikidata class | fort |
| Types | fort\|national park\|historic landmark |
| Administrative area | Mombasa County |
| Inception | 1593 |
| Designations | World Heritage Site\|Heritage of Portuguese Influence\|National Monument of Kenya |
| UNESCO WHC id | 1295rev |
| Wikipedia language editions | 48 |

## What the model contains

Tier **T1**, status `location-only`, 23 elements (road 7, building 14, coastline 1, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":185,"medianInside":3,"medianOutside":18.1}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-4.07117/39.68206) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|national park\|historic landmark; sitelinks=48; wikidata:Q379080 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/fort-jesus-museum-q379080.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/kenya.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
