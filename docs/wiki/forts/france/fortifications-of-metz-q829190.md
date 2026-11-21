# Fortifications of Metz

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-metz-q829190` |
| Coordinates | 49.11778, 6.18556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.11778/6.18556)) |
| Wikidata | [Q829190](https://www.wikidata.org/wiki/Q829190) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Metz |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, road 191, building 309, wall 16, water 2, waterway 1, retaining-wall 2, zone 10).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 15, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35214195 historic=castle Q753011 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.11778/6.18556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q829190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/fortifications-of-metz-q829190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
