# Milecastle 4

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `milecastle-4-q6851176` |
| Coordinates | 54.96995, -1.61781 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.96995/-1.61781)) |
| Wikidata | [Q6851176](https://www.wikidata.org/wiki/Q6851176) (CC0) |
| Wikidata class | castle |
| Types | milecastle |
| Administrative area | Newcastle upon Tyne |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `website` | https://co-curate.ncl.ac.uk/durham-tower/ |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 6, road 230, wall 19, building 142, zone 6, waterway 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 8, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/498259325 historic=citywalls Q17534186 229 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 142 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 230 mapped (trace size budget); minor lanes are not drawn
- origin moved 228 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.96995/-1.61781) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; milecastle; sitelinks=4; wikidata:Q6851176 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/milecastle-4-q6851176.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
