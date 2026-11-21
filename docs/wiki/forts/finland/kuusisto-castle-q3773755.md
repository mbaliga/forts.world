# Kuusisto Castle

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuusisto-castle-q3773755` |
| Coordinates | 60.40786, 22.47485 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.40786/22.47485)) |
| Wikidata | [Q3773755](https://www.wikidata.org/wiki/Q3773755) (CC0) |
| Wikidata class | castle |
| Types | castle\|bishop castle |
| Administrative area | Kaarina |
| Designations | registered archaeological site in Finland |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |
| OSM `website` | http://museovirastorestauroi.nba.fi/linnat/kuusiston-linna |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, coastline 2, building 6, road 22, wall 33, waterway 1, cliff 1, water 1).

Evidence: documented 0, mapped 67, inferred 0, derived 1; heights documented 22, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115159750 historic=castle Q3773755 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":223,"medianInside":19.5,"medianOutside":22.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.40786/22.47485) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|bishop castle; sitelinks=10; wikidata:Q3773755 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/kuusisto-castle-q3773755.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
