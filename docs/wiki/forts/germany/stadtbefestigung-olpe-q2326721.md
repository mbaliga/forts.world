# Stadtbefestigung Olpe

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-olpe-q2326721` |
| Coordinates | 51.0294, 7.84597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0294/7.84597)) |
| Wikidata | [Q2326721](https://www.wikidata.org/wiki/Q2326721) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Olpe |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 1, road 174, waterway 7, wall 6, building 312, zone 3).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/345671442 historic=yes 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 312 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0294/7.84597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q2326721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/stadtbefestigung-olpe-q2326721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
