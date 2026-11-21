# Pendinas Lochtyn

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pendinas-lochtyn-q13130636` |
| Coordinates | 52.16621, -4.46425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.16621/-4.46425)) |
| Wikidata | [Q13130636](https://www.wikidata.org/wiki/Q13130636) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|contour fort |
| Administrative area | Ceredigion |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, road 20, building 2, coastline 1, cliff 5, zone 6, water 3).

Evidence: documented 0, mapped 38, inferred 0, derived 3; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/661218161 historic=archaeological_site Q13130636 9 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":24,"medianInside":17.7,"medianOutside":90.8}
- sea-1: DEM check ok {"cells":24,"medianInside":7.6,"medianOutside":90.8}
- sea-2: DEM check failed {"cells":2,"medianInside":30.2,"medianOutside":88.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.16621/-4.46425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|contour fort; sitelinks=1; wikidata:Q13130636 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/pendinas-lochtyn-q13130636.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
