# Porta Pia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-pia-q3908761` |
| Coordinates | 43.61528, 13.505 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.61528/13.505)) |
| Wikidata | [Q3908761](https://www.wikidata.org/wiki/Q3908761) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ancona |
| Inception | 1780 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, wall 44, road 132, building 121, retaining-wall 1, zone 2).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 52, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1588358 historic=castle Q3678370 348 m from ledger point
- origin moved 344 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.61528/13.505) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3908761 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/porta-pia-q3908761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
