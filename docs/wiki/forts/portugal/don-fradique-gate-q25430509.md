# Don Fradique gate

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `don-fradique-gate-q25430509` |
| Coordinates | 38.71255, -9.13147 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71255/-9.13147)) |
| Wikidata | [Q25430509](https://www.wikidata.org/wiki/Q25430509) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Santa Maria Maior |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, marker 21, road 317, wall 28, building 670, retaining-wall 17, water 1, zone 6, coastline 1, waterway 1).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 16, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98550235 historic=castle Q66814317 93 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 670 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 317 mapped (trace size budget); minor lanes are not drawn
- origin moved 94 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71255/-9.13147) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q25430509 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/don-fradique-gate-q25430509.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
