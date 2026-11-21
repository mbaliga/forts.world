# Batteria San Giuliano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batteria-san-giuliano-q3636723` |
| Coordinates | 44.39269, 8.95978 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.39269/8.95978)) |
| Wikidata | [Q3636723](https://www.wikidata.org/wiki/Q3636723) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Genoa |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 182 elements (outline 1, marker 1, road 71, zone 16, retaining-wall 7, building 79, coastline 1, waterway 4, water 1).

Evidence: documented 0, mapped 182, inferred 0, derived 1; heights documented 67, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154339459 historic=castle Q3748609 54 m from ledger point
- origin moved 56 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":37,"medianInside":0,"medianOutside":23.5}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.39269/8.95978) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q3636723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 182 elements); data/traces/batteria-san-giuliano-q3636723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
