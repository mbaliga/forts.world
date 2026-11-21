# Staré mesto, citadela

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stare-mesto-citadela-q112090599` |
| Coordinates | 48.46598, 18.89198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.46598/18.89198)) |
| Wikidata | [Q112090599](https://www.wikidata.org/wiki/Q112090599) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|settlement site |
| Administrative area | Banská Štiavnica |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, marker 5, road 47, building 3, waterway 9, wall 27, zone 3, water 2).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/389920729 historic=archaeological_site Q112090599 7 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.46598/18.89198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|settlement site; sitelinks=0; wikidata:Q112090599 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/stare-mesto-citadela-q112090599.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
