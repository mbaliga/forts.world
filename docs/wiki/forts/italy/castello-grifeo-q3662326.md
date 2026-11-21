# Castello Grifeo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-grifeo-q3662326` |
| Coordinates | 37.72484, 12.88716 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.72484/12.88716)) |
| Wikidata | [Q3662326](https://www.wikidata.org/wiki/Q3662326) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum\|religious museum |
| Administrative area | Partanna |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `description` | Il museo ha riaperto con un nuovo allestimento. |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 1, road 130, building 647, wall 188, retaining-wall 61, zone 31).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 4, inferred 0, unknown 257.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1253512749 historic=castle 535 m from ledger point
- pruned to the outline plus 150 m: 1059 -> 772 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 442 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 106 mapped (trace size budget); minor lanes are not drawn
- origin moved 534 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.72484/12.88716) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum\|religious museum; sitelinks=2; wikidata:Q3662326 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/castello-grifeo-q3662326.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
