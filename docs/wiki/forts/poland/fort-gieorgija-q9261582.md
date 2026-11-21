# Fort Gieorgija

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gieorgija-q9261582` |
| Coordinates | 52.2639, 20.9908 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2639/20.9908)) |
| Wikidata | [Q9261582](https://www.wikidata.org/wiki/Q9261582) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | http://nowyfort.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, marker 12, road 261, building 121, zone 101, wall 7).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 122, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/404091961 historic=fort Q9261649 502 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 121 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 261 mapped (trace size budget); minor lanes are not drawn
- origin moved 502 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2639/20.9908) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q9261582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/fort-gieorgija-q9261582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
