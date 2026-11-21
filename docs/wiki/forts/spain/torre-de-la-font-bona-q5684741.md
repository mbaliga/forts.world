# Torre de la Font Bona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-font-bona-q5684741` |
| Coordinates | 38.72056, -0.65722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72056/-0.65722)) |
| Wikidata | [Q5684741](https://www.wikidata.org/wiki/Q5684741) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|monument |
| Administrative area | Banyeres de Mariola |
| Inception | 1510 |
| Designations | BIE\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, road 110, building 524, zone 1, wall 23, retaining-wall 2).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 0, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/482332235 historic=castle Q3823727 569 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 524 mapped (trace size budget); the rest of the town is not drawn
- origin moved 569 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72056/-0.65722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|monument; sitelinks=4; wikidata:Q5684741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/torre-de-la-font-bona-q5684741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
