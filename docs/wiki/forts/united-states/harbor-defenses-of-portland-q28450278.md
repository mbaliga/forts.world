# Harbor Defenses of Portland

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harbor-defenses-of-portland-q28450278` |
| Coordinates | 43.64861, -70.22639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.64861/-70.22639)) |
| Wikidata | [Q28450278](https://www.wikidata.org/wiki/Q28450278) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 98 elements (outline 1, road 66, coastline 1, building 23, zone 1, retaining-wall 2, wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 98, inferred 0, derived 2; heights documented 1, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1268722890 historic=fort 67 m from ledger point
- origin moved 68 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":167,"medianInside":0.3,"medianOutside":5.2}
- sea-1: DEM check ok {"cells":55,"medianInside":0.4,"medianOutside":1.3}
- 410 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.64861/-70.22639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q28450278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 98 elements); data/traces/harbor-defenses-of-portland-q28450278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
