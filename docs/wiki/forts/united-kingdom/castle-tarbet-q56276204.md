# Castle Tarbet

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-tarbet-q56276204` |
| Coordinates | 56.07117, -2.78159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.07117/-2.78159)) |
| Wikidata | [Q56276204](https://www.wikidata.org/wiki/Q56276204) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | East Lothian |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 7 elements (coastline 3, wall 1, zone 1, water 2).

Evidence: documented 0, mapped 7, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":360,"medianInside":0.4,"medianOutside":2}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0.6}
- 344 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.07117/-2.78159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q56276204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/castle-tarbet-q56276204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
