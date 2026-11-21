# Old Fort of Zanzibar

> Tanzania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-fort-of-zanzibar-q3748659` |
| Coordinates | -6.16139, 39.1892 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-6.16139/39.1892)) |
| Wikidata | [Q3748659](https://www.wikidata.org/wiki/Q3748659) (CC0) |
| Wikidata class | fort |
| Types | historic site\|fort |
| Administrative area | Stone Town |
| Inception | 1699 |
| Designations | part of UNESCO World Heritage Site\|Heritage of Portuguese Influence |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 247 elements (outline 1, marker 3, road 112, building 538, zone 8, coastline 2, water 1).

Evidence: documented 0, mapped 247, inferred 0, derived 1; heights documented 97, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5310369 historic=fort Q3748659 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 538 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":77,"medianInside":1.5,"medianOutside":14.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-6.16139/39.1892) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic site\|fort; sitelinks=9; wikidata:Q3748659 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 247 elements); data/traces/old-fort-of-zanzibar-q3748659.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tanzania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
