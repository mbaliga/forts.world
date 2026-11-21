# Krakowska Gate in Wieluń

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `krakowska-gate-in-wielun-q121327141` |
| Coordinates | 51.2203, 18.573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2203/18.573)) |
| Wikidata | [Q121327141](https://www.wikidata.org/wiki/Q121327141) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|architectural heritage monument |
| Administrative area | Wieluń |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Piwnice dawnego zamku w Wieluniu |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 8, road 312, building 184, zone 102, wall 56, waterway 11).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 79, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/277763853 historic=yes 134 m from ledger point
- pruned to the outline plus 150 m: 674 -> 404 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 86 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 134 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2203/18.573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|architectural heritage monument; sitelinks=0; wikidata:Q121327141 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/krakowska-gate-in-wielun-q121327141.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
