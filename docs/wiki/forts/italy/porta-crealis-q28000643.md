# Porta Crealis

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-crealis-q28000643` |
| Coordinates | 45.30763, 7.89318 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.30763/7.89318)) |
| Wikidata | [Q28000643](https://www.wikidata.org/wiki/Q28000643) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Caluso |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, road 46, building 23, zone 3, wall 2).

Evidence: documented 0, mapped 75, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/327636437 historic=castle Q32135736 240 m from ledger point
- origin moved 234 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.30763/7.89318) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/porta-crealis-q28000643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
