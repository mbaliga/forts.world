# Porta Furba Battery

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-furba-battery-q134777261` |
| Coordinates | 41.86964, 12.54256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.86964/12.54256)) |
| Wikidata | [Q134777261](https://www.wikidata.org/wiki/Q134777261) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortification |
| Administrative area | Rome |
| Inception | 1883 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, road 538, building 402, zone 14, wall 7).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 29, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/997532489 historic=yes 190 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 402 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 538 mapped (trace size budget); minor lanes are not drawn
- origin moved 190 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.86964/12.54256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortification; sitelinks=1; wikidata:Q134777261 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/porta-furba-battery-q134777261.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
