# Torrione e Rivellino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torrione-e-rivellino-q3995775` |
| Coordinates | 42.92329, 10.52728 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.92329/10.52728)) |
| Wikidata | [Q3995775](https://www.wikidata.org/wiki/Q3995775) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|ravelin\|city gate |
| Administrative area | Piombino |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 1, road 204, building 223, zone 6, wall 11, retaining-wall 4, coastline 2, water 1).

Evidence: documented 0, mapped 296, inferred 0, derived 1; heights documented 4, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/361558775 historic=castle Q3995775 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 223 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":3.5,"medianOutside":22.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.92329/10.52728) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|ravelin\|city gate; sitelinks=3; wikidata:Q3995775 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/torrione-e-rivellino-q3995775.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
