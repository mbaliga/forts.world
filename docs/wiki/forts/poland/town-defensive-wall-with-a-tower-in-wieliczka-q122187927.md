# Town defensive wall with a tower in Wieliczka

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `town-defensive-wall-with-a-tower-in-wieliczka-q122187927` |
| Coordinates | 49.9836, 20.05877 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9836/20.05877)) |
| Wikidata | [Q122187927](https://www.wikidata.org/wiki/Q122187927) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Wieliczka |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `description` | Wybudowany w XIX w. w miejscu dawnej zabudowy drewnianej, obejmował pomieszczenia gospodarcze m.in. mieszkanie dozorcy, stajnie i skład przeciwpożarowy |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 5, road 377, building 218, wall 24, zone 10, retaining-wall 3).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 5, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148464920 historic=castle 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 218 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 377 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9836/20.05877) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q122187927 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/town-defensive-wall-with-a-tower-in-wieliczka-q122187927.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
