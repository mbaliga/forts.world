# Southampton Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `southampton-castle-q7569104` |
| Coordinates | 50.9012, -1.4055 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9012/-1.4055)) |
| Wikidata | [Q7569104](https://www.wikidata.org/wiki/Q7569104) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | City of Southampton |
| Designations | Grade II* listed building |
| Wikipedia language editions | 9 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 11, road 212, building 153, wall 13, zone 13, waterway 3).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 11, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27341307 historic=ruins Q7569104 66 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 153 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 212 mapped (trace size budget); minor lanes are not drawn
- origin moved 64 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9012/-1.4055) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=9; wikidata:Q7569104 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/southampton-castle-q7569104.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
