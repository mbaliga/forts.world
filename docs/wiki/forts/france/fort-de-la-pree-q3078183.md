# Fort de La Prée

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-pree-q3078183` |
| Coordinates | 46.1808, -1.2887 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.1808/-1.2887)) |
| Wikidata | [Q3078183](https://www.wikidata.org/wiki/Q3078183) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | La Flotte |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |
| OSM `website` | https://fort-la-pree.com |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, road 12, building 7, wall 5, zone 6, retaining-wall 5, coastline 1, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26139100 historic=fort Q3078183 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":233,"medianInside":0,"medianOutside":5.1}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.1808/-1.2887) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q3078183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/fort-de-la-pree-q3078183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
