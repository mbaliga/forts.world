# City walls in Loano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-in-loano-q137593947` |
| Coordinates | 44.12902, 8.25911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.12902/8.25911)) |
| Wikidata | [Q137593947](https://www.wikidata.org/wiki/Q137593947) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Loano |
| Inception | 1600 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 245 elements (outline 1, road 96, waterway 4, building 114, coastline 1, water 1, zone 22, wall 6).

Evidence: documented 0, mapped 245, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2714710 historic=castle 459 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 460 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.12902/8.25911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q137593947 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 245 elements); data/traces/city-walls-in-loano-q137593947.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
