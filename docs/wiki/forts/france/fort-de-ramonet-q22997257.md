# Fort de Ramonet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-ramonet-q22997257` |
| Coordinates | 47.3425, -3.14611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3425/-3.14611)) |
| Wikidata | [Q22997257](https://www.wikidata.org/wiki/Q22997257) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Le Palais |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, building 23, road 4, zone 10, coastline 2, waterway 1, water 4).

Evidence: documented 0, mapped 45, inferred 0, derived 4; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63485690 historic=fort Q22997257 24 m from ledger point
- origin moved 23 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":193,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":399,"medianInside":0,"medianOutside":0}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3425/-3.14611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22997257 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 45 elements); data/traces/fort-de-ramonet-q22997257.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
