# Muralla de Logroño

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-logrono-q56190363` |
| Coordinates | 42.46667, -2.45 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.46667/-2.45)) |
| Wikidata | [Q56190363](https://www.wikidata.org/wiki/Q56190363) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Logroño |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://logrono.es/-/yacimiento-arqueologico-de-valbuena |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, marker 1, road 158, water 4, building 30, waterway 1, wall 7, zone 1).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 22, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223037063 historic=archaeological_site 233 m from ledger point
- origin moved 230 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.46667/-2.45) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q56190363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/muralla-de-logrono-q56190363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
