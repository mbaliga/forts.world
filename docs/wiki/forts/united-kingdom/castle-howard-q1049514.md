# Castle Howard

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-howard-q1049514` |
| Coordinates | 54.12156, -0.90609 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.12156/-0.90609)) |
| Wikidata | [Q1049514](https://www.wikidata.org/wiki/Q1049514) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|garden\|historic house museum |
| Administrative area | Yorkshire |
| Inception | 1699 |
| Designations | Grade I listed building |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.castlehoward.co.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, road 50, water 1, building 6, wall 13, zone 29, waterway 1).

Evidence: documented 0, mapped 101, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35902933 historic=castle Q1049514 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.12156/-0.90609) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|garden\|historic house museum; sitelinks=29; wikidata:Q1049514 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/castle-howard-q1049514.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
