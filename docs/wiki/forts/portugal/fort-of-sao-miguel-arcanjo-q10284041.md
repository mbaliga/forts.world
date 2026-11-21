# Fort of São Miguel Arcanjo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-sao-miguel-arcanjo-q10284041` |
| Coordinates | 39.6045, -9.08539 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.6045/-9.08539)) |
| Wikidata | [Q10284041](https://www.wikidata.org/wiki/Q10284041) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Nazaré |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, marker 1, coastline 10, road 24, cliff 3, wall 1, water 1).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/463431490 historic=fort Q10284041 24 m from ledger point
- island ring (591 m2) cut out of sea-0
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":283,"medianInside":0,"medianOutside":12.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.6045/-9.08539) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=5; wikidata:Q10284041 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/fort-of-sao-miguel-arcanjo-q10284041.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
