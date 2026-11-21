# Fort Niagara

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-niagara-q362553` |
| Coordinates | 43.26167, -79.06361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.26167/-79.06361)) |
| Wikidata | [Q362553](https://www.wikidata.org/wiki/Q362553) (CC0) |
| Wikidata class | fort |
| Types | artillery fort |
| Administrative area | Porter |
| Inception | 1678 |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 11 |
| OSM `historic` | fort |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 131 elements (outline 1, marker 1, road 82, building 31, wall 7, waterway 4, zone 4).

Evidence: documented 0, mapped 131, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/137364896 historic=fort Q362553 105 m from ledger point
- origin moved 106 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.26167/-79.06361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort; sitelinks=11; wikidata:Q362553 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 131 elements); data/traces/fort-niagara-q362553.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
