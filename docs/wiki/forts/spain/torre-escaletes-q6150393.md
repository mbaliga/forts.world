# Torre Escaletes

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-escaletes-q6150393` |
| Coordinates | 38.1925, -0.52861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.1925/-0.52861)) |
| Wikidata | [Q6150393](https://www.wikidata.org/wiki/Q6150393) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Santa Pola |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, coastline 1, road 35, zone 1, building 40, waterway 2, wall 23).

Evidence: documented 0, mapped 103, inferred 0, derived 0; heights documented 35, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/438443377 historic=castle Q6150393 16 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 16 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.1925/-0.52861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q6150393 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 103 elements); data/traces/torre-escaletes-q6150393.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
