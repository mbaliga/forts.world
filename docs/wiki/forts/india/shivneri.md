# Shivneri

> India · Maharashtra · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shivneri` |
| Coordinates | 19.196643, 73.859001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.196643/73.859001)) |
| Wikidata | [Q3520074](https://www.wikidata.org/wiki/Q3520074) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pune district |
| Designations | part of UNESCO World Heritage Site\|Monument of National Importance |
| Wikipedia language editions | 20 |
| Programme catalogue | confidence high, significance rank 205; sources catalogue:shivneri;wikidata:Q3520074;smith-newton:r122 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, marker 1, road 8, cliff 2, building 1).

Evidence: documented 0, mapped 13, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/198116052 historic=fort Q3520074 320 m from ledger point
- origin moved 316 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.196643/73.859001) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

Alpha-K batch (2026-11-11): 10 forts spread across A-Z starting at K, distinct from batch 0; do after batch 0. coords from wikidata (was 19.199,73.859) Auto-T1 built 2026-11-15 from OSM+Terrarium (data/traces/shivneri.trace.json). smoke test fails: spawn reaches ~130 nodes and the Birthplace marker is unreachable behind two mapped cliff lines; needs a plan for the approach (not invented). T2 needs plans/surveys/photos; none researched yet. docs/research/alpha-K-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
