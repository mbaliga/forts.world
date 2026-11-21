# Taikury Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `taikury-castle-q16619101` |
| Coordinates | 50.5319, 26.3708 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5319/26.3708)) |
| Wikidata | [Q16619101](https://www.wikidata.org/wiki/Q16619101) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Taikury |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `description` | На початку ХVІІІ ст. Тайкури переходять до Пепловського. За його володарювання у 1710 році тут був побудований костел св. Лаврентія в готичному стилі. |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, marker 4, road 17, wall 1, building 15).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/610498688 historic=building 169 m from ledger point
- origin moved 168 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5319/26.3708) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q16619101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/taikury-castle-q16619101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
