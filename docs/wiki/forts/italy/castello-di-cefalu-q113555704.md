# Castello di Cefalù

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-cefalu-q113555704` |
| Coordinates | 38.03754, 14.0274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.03754/14.0274)) |
| Wikidata | [Q113555704](https://www.wikidata.org/wiki/Q113555704) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cefalù |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, road 14, coastline 1, wall 24, cliff 5, zone 2).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/782048594 historic=archaeological_site 15 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 15 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.03754/14.0274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113555704 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/castello-di-cefalu-q113555704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
