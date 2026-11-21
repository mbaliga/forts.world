# Fort de Felipet

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-felipet-q43142637` |
| Coordinates | 39.87162, 4.30684 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.87162/4.30684)) |
| Wikidata | [Q43142637](https://www.wikidata.org/wiki/Q43142637) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Maó |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 66 elements (outline 1, road 24, building 15, coastline 1, wall 10, retaining-wall 12, zone 1, water 2).

Evidence: documented 0, mapped 66, inferred 0, derived 2; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/200306323 historic=castle Q11681904 627 m from ledger point
- origin moved 623 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":576,"medianInside":15.4,"medianOutside":null}
- sea-1: DEM check ok {"cells":67,"medianInside":0,"medianOutside":18}
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.87162/4.30684) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q43142637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 66 elements); data/traces/fort-de-felipet-q43142637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
