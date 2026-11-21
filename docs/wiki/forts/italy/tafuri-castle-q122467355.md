# Tafuri Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tafuri-castle-q122467355` |
| Coordinates | 36.68965, 15.13404 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.68965/15.13404)) |
| Wikidata | [Q122467355](https://www.wikidata.org/wiki/Q122467355) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Portopalo di Capo Passero |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, road 20, coastline 2, building 24, wall 21).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1207509399 historic=archaeological_site 689 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 693 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.68965/15.13404) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q122467355 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/tafuri-castle-q122467355.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
