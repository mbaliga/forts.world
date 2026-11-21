# Kernavė

> Lithuania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kernave-q215315` |
| Coordinates | 54.88333, 24.85 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.88333/24.85)) |
| Wikidata | [Q215315](https://www.wikidata.org/wiki/Q215315) (CC0) |
| Wikidata class | castle |
| Types | hillfort\|castle\|town |
| Administrative area | Širvintos District Municipality |
| Wikipedia language editions | 49 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 86 elements (outline 1, marker 3, road 42, waterway 1, building 37, wall 1, zone 1).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 1, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/399108067 historic=ruins 201 m from ledger point
- origin moved 200 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.88333/24.85) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; hillfort\|castle\|town; sitelinks=49; wikidata:Q215315 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 86 elements); data/traces/kernave-q215315.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
