# Fuerte de Isla Verde

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-isla-verde-q5507217` |
| Coordinates | 36.12325, -5.43464 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.12325/-5.43464)) |
| Wikidata | [Q5507217](https://www.wikidata.org/wiki/Q5507217) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cádiz Province |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 94 elements (outline 1, road 55, coastline 1, building 26, wall 5, zone 5, water 1).

Evidence: documented 0, mapped 94, inferred 0, derived 1; heights documented 1, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143782401 historic=fort Q5507217 16 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":51,"medianInside":0,"medianOutside":2.7}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.12325/-5.43464) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5507217 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 94 elements); data/traces/fuerte-de-isla-verde-q5507217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
