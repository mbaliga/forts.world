# Wem Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wem-castle-q17675875` |
| Coordinates | 52.85465, -2.7265 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.85465/-2.7265)) |
| Wikidata | [Q17675875](https://www.wikidata.org/wiki/Q17675875) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|motte\|motte-and-bailey castle |
| Administrative area | Wem Urban |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | motte |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, marker 2, road 102, building 398, waterway 4, wall 8, zone 2, water 2).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/376426832 historic=archaeological_site Q17675875 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 398 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.85465/-2.7265) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|motte\|motte-and-bailey castle; sitelinks=1; wikidata:Q17675875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/wem-castle-q17675875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
