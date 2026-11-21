# Recolhimento das Merceeiras

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `recolhimento-das-merceeiras-q53806106` |
| Coordinates | 38.71023, -9.13155 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71023/-9.13155)) |
| Wikidata | [Q53806106](https://www.wikidata.org/wiki/Q53806106) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|cultural heritage\|building |
| Administrative area | Santa Maria Maior |
| Inception | 1785 |
| Designations | Bem Cultural Imóvel\|Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 21, road 283, wall 23, building 448, retaining-wall 26, water 3, zone 12, coastline 1, waterway 1).

Evidence: documented 0, mapped 358, inferred 0, derived 1; heights documented 45, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1391113 historic=castle Q53806106 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 448 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":5,"medianInside":0.6,"medianOutside":39.7}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71023/-9.13155) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|cultural heritage\|building; sitelinks=1; wikidata:Q53806106 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/recolhimento-das-merceeiras-q53806106.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
