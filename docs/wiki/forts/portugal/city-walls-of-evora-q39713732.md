# City walls of Évora

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-evora-q39713732` |
| Coordinates | 38.56685, -7.90857 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.56685/-7.90857)) |
| Wikidata | [Q39713732](https://www.wikidata.org/wiki/Q39713732) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|cultural heritage |
| Administrative area | União das Freguesias de Évora (São Mamede, Sé, São Pedro e Santo Antão) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, marker 9, road 147, building 751, wall 107, retaining-wall 2, zone 4, water 1).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 4, inferred 0, unknown 225.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1226423350 historic=castle Q113624120 520 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 751 mapped (trace size budget); the rest of the town is not drawn
- origin moved 518 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.56685/-7.90857) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|cultural heritage; sitelinks=1; wikidata:Q39713732 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/city-walls-of-evora-q39713732.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
