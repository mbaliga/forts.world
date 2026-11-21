# Okazaki Park

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `okazaki-park-q11472818` |
| Coordinates | 34.95654, 137.15933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.95654/137.15933)) |
| Wikidata | [Q11472818](https://www.wikidata.org/wiki/Q11472818) (CC0) |
| Wikidata class | ruin |
| Types | urban park\|castle ruin in Japan\|historical park |
| Administrative area | Okazaki |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | https://okazaki-kanko.jp/okazaki-park/feature/okazakijo/top/ |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 39, waterway 2, road 152, building 214, zone 8, retaining-wall 30, cliff 3, water 2, wall 20).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 12, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231295714 historic=castle Q1013445 53 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 214 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 152 mapped (trace size budget); minor lanes are not drawn
- origin moved 53 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.95654/137.15933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; urban park\|castle ruin in Japan\|historical park; sitelinks=2; wikidata:Q11472818 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/okazaki-park-q11472818.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
