# Torre Monreal, Tudela

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-monreal-tudela-q3752979` |
| Coordinates | 42.05889, -1.60639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.05889/-1.60639)) |
| Wikidata | [Q3752979](https://www.wikidata.org/wiki/Q3752979) (CC0) |
| Wikidata class | fort |
| Types | tower\|monument\|rifle fort |
| Administrative area | Tudela |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `website` | https://turismo.navarra.com/item/la-torre-monreal-tudela/ |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 1, road 214, building 208, wall 4, zone 6, water 1, retaining-wall 4).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 122, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1449050645 historic=castle Q3752979 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 208 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 214 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.05889/-1.60639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|monument\|rifle fort; sitelinks=4; wikidata:Q3752979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/torre-monreal-tudela-q3752979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
