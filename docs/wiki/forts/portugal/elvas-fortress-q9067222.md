# Elvas Fortress

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elvas-fortress-q9067222` |
| Coordinates | 38.88062, -7.16332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.88062/-7.16332)) |
| Wikidata | [Q9067222](https://www.wikidata.org/wiki/Q9067222) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|defensive wall\|fortress\|stronghold |
| Administrative area | Caia, São Pedro e Alcáçova |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `description` | Segunda Cerca Islâmica |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 369 elements (outline 1, marker 4, road 146, building 1414, wall 84, retaining-wall 11, zone 2).

Evidence: documented 0, mapped 369, inferred 0, derived 0; heights documented 0, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/743180645 historic=citywalls 130 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1414 mapped (trace size budget); the rest of the town is not drawn
- origin moved 130 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.88062/-7.16332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|defensive wall\|fortress\|stronghold; sitelinks=3; wikidata:Q9067222 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 369 elements); data/traces/elvas-fortress-q9067222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
