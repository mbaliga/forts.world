# Forte de Santa Maria

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-santa-maria-q10283907` |
| Coordinates | -13.00451, -38.53399 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-13.00451/-38.53399)) |
| Wikidata | [Q10283907](https://www.wikidata.org/wiki/Q10283907) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|historic site\|fort |
| Administrative area | Salvador |
| Inception | 1696 |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |
| OSM `historic` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 131 elements (outline 1, marker 1, coastline 6, road 41, zone 1, building 78, retaining-wall 2, water 1).

Evidence: documented 0, mapped 131, inferred 0, derived 1; heights documented 4, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165911470 historic=fortress Q10283907 9 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":268,"medianInside":6.8,"medianOutside":11.1}
- 38 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-13.00451/-38.53399) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|historic site\|fort; sitelinks=4; wikidata:Q10283907 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 131 elements); data/traces/forte-de-santa-maria-q10283907.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
