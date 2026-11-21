# Shirokane Manor Grounds

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shirokane-manor-grounds-q116157701` |
| Coordinates | 35.63756, 139.71856 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.63756/139.71856)) |
| Wikidata | [Q116157701](https://www.wikidata.org/wiki/Q116157701) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Shirokanedai |
| Inception | 1500 |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 188 elements (outline 1, road 65, building 364, zone 1, waterway 1).

Evidence: documented 0, mapped 188, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/387635919 historic=archaeological_site 425 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 364 mapped (trace size budget); the rest of the town is not drawn
- origin moved 423 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.63756/139.71856) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=1; wikidata:Q116157701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 188 elements); data/traces/shirokane-manor-grounds-q116157701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
