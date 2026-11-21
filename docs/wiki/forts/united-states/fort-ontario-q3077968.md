# Fort Ontario

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ontario-q3077968` |
| Coordinates | 43.46583, -76.50806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.46583/-76.50806)) |
| Wikidata | [Q3077968](https://www.wikidata.org/wiki/Q3077968) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Oswego |
| Inception | 1839 |
| Designations | New York State Register of Historic Places listed place\|National Register of Historic Places listed place |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |
| OSM `website` | https://parks.ny.gov/historic-sites/fortontario/details.aspx |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, road 29, wall 1, building 11, waterway 2).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11613345 historic=fort Q3077968 15 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.46583/-76.50806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q3077968 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/fort-ontario-q3077968.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
