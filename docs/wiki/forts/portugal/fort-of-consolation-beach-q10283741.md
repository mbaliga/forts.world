# Fort of Consolation Beach

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-consolation-beach-q10283741` |
| Coordinates | 39.32447, -9.36117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.32447/-9.36117)) |
| Wikidata | [Q10283741](https://www.wikidata.org/wiki/Q10283741) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Atouguia da Baleia |
| Inception | 1645 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, road 21, coastline 2, building 22, wall 4, zone 3, cliff 2, water 2).

Evidence: documented 0, mapped 57, inferred 0, derived 2; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21445038 historic=fort Q10283741 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":299,"medianInside":0,"medianOutside":3.4}
- sea-1: DEM check ok {"cells":400,"medianInside":0,"medianOutside":0.1}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.32447/-9.36117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=6; wikidata:Q10283741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 57 elements); data/traces/fort-of-consolation-beach-q10283741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
