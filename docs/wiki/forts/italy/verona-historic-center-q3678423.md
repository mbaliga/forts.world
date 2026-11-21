# Verona historic center

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `verona-historic-center-q3678423` |
| Coordinates | 45.43861, 10.99389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.43861/10.99389)) |
| Wikidata | [Q3678423](https://www.wikidata.org/wiki/Q3678423) (CC0) |
| Wikidata class | fort |
| Types | old town\|fortified town |
| Administrative area | Verona |
| Designations | World Heritage Site |
| UNESCO WHC id | 797 |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 8, road 229, waterway 1, water 4, zone 8, wall 3, building 226, retaining-wall 2).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 36, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138810076 historic=citywalls Q3909325 196 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 229 mapped (trace size budget); minor lanes are not drawn
- origin moved 195 m from the ledger point to the outline centroid
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.43861/10.99389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; old town\|fortified town; sitelinks=3; wikidata:Q3678423 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/verona-historic-center-q3678423.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
