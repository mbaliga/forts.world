# Morgan's Mount

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `morgan-s-mount-q6911525` |
| Coordinates | 53.1933, -2.89588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1933/-2.89588)) |
| Wikidata | [Q6911525](https://www.wikidata.org/wiki/Q6911525) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Cheshire West and Chester |
| Designations | Grade I listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 2, road 262, building 424, waterway 6, water 3, zone 6, wall 9).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 11, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1545574570 historic=citywalls 75 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 424 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 262 mapped (trace size budget); minor lanes are not drawn
- origin moved 75 m from the ledger point to the outline centroid
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1933/-2.89588) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q6911525 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/morgan-s-mount-q6911525.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
