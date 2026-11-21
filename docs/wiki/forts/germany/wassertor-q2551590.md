# Wassertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wassertor-q2551590` |
| Coordinates | 53.8964, 11.4613 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.8964/11.4613)) |
| Wikidata | [Q2551590](https://www.wikidata.org/wiki/Q2551590) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|water gate |
| Administrative area | Wismar |
| Inception | 1450 |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 6, road 241, waterway 4, coastline 1, building 241, wall 17, zone 11, retaining-wall 8, water 1).

Evidence: documented 0, mapped 319, inferred 0, derived 1; heights documented 26, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95798545 historic=yes 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 241 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 241 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":27,"medianInside":0.2,"medianOutside":0.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.8964/11.4613) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|water gate; sitelinks=3; wikidata:Q2551590 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/wassertor-q2551590.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
