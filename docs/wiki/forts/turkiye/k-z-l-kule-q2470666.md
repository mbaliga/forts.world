# Kızıl Kule

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `k-z-l-kule-q2470666` |
| Coordinates | 36.53644, 31.99831 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.53644/31.99831)) |
| Wikidata | [Q2470666](https://www.wikidata.org/wiki/Q2470666) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|museum\|historic site |
| Administrative area | Antalya Province |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, marker 1, road 39, building 131, wall 7, coastline 2, zone 2, water 2).

Evidence: documented 0, mapped 185, inferred 0, derived 2; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/57956094 historic=castle Q2470666 6 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":461,"medianInside":0,"medianOutside":34.1}
- sea-1: DEM check ok {"cells":137,"medianInside":0,"medianOutside":22.5}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.53644/31.99831) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|museum\|historic site; sitelinks=17; wikidata:Q2470666 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/k-z-l-kule-q2470666.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
