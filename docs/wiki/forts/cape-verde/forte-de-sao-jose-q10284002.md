# Forte de São José

> Cape Verde · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-jose-q10284002` |
| Coordinates | 15.13641, -23.21242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.13641/-23.21242)) |
| Wikidata | [Q10284002](https://www.wikidata.org/wiki/Q10284002) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Porto Inglês |
| Inception | 1887 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 160 elements (outline 1, marker 2, building 72, road 54, zone 6, cliff 4, wall 18, coastline 1, water 2).

Evidence: documented 0, mapped 160, inferred 0, derived 2; heights documented 0, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237395031 historic=castle 9 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":178,"medianInside":18.3,"medianOutside":17.9}
- sea-1: DEM check ok {"cells":2,"medianInside":7.4,"medianOutside":18}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.13641/-23.21242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=6; wikidata:Q10284002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 160 elements); data/traces/forte-de-sao-jose-q10284002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cape-verde.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
