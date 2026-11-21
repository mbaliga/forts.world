# City walls of Strážnice

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-straznice-q66123983` |
| Coordinates | 48.89559, 17.30287 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.89559/17.30287)) |
| Wikidata | [Q66123983](https://www.wikidata.org/wiki/Q66123983) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Strážnice |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, marker 2, road 41, building 218, zone 2, wall 3, waterway 1).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 39, inferred 0, unknown 182.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/134258570 historic=monument 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.89559/17.30287) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q66123983 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/city-walls-of-straznice-q66123983.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
