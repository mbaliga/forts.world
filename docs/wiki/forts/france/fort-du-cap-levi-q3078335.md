# Fort du Cap-Lévi

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-cap-levi-q3078335` |
| Coordinates | 49.6902, -1.47689 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6902/-1.47689)) |
| Wikidata | [Q3078335](https://www.wikidata.org/wiki/Q3078335) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Fermanville |
| Inception | 1801 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, coastline 1, road 22, building 11, wall 6, water 2, zone 1).

Evidence: documented 0, mapped 45, inferred 0, derived 1; heights documented 5, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225302991 historic=fort 19 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":248,"medianInside":0,"medianOutside":7.5}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6902/-1.47689) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078335 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/fort-du-cap-levi-q3078335.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
