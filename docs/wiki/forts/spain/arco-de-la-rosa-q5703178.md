# Arco de la Rosa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-de-la-rosa-q5703178` |
| Coordinates | 36.52924, -6.29447 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.52924/-6.29447)) |
| Wikidata | [Q5703178](https://www.wikidata.org/wiki/Q5703178) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|archaeological site |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, marker 5, road 121, wall 4, building 52, zone 4, water 2, coastline 1).

Evidence: documented 0, mapped 190, inferred 0, derived 1; heights documented 1, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162532972 historic=fort Q98059182 574 m from ledger point
- origin moved 580 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":156,"medianInside":0,"medianOutside":18.2}
- 51 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.52924/-6.29447) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|archaeological site; sitelinks=3; wikidata:Q5703178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/arco-de-la-rosa-q5703178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
