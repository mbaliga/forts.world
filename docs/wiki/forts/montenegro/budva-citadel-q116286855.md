# Budva - Citadel

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `budva-citadel-q116286855` |
| Coordinates | 42.27703, 18.8382 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.27703/18.8382)) |
| Wikidata | [Q116286855](https://www.wikidata.org/wiki/Q116286855) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Budva |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 13, road 70, wall 6, building 232, zone 1, retaining-wall 1, coastline 1, water 1).

Evidence: documented 0, mapped 326, inferred 0, derived 1; heights documented 222, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161896444 historic=castle Q65055472 3 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":294,"medianInside":0,"medianOutside":2}
- 147 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.27703/18.8382) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=1; wikidata:Q116286855 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/budva-citadel-q116286855.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
