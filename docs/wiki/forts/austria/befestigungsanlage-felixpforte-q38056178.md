# Befestigungsanlage, Felixpforte

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `befestigungsanlage-felixpforte-q38056178` |
| Coordinates | 47.80275, 13.04688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.80275/13.04688)) |
| Wikidata | [Q38056178](https://www.wikidata.org/wiki/Q38056178) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Salzburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 37, road 391, building 98, zone 4, water 3, wall 25, waterway 1).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 39, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/324384 historic=castle Q688546 478 m from ledger point
- roads capped: kept the 150 longest of 391 mapped (trace size budget); minor lanes are not drawn
- origin moved 479 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.80275/13.04688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q38056178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/befestigungsanlage-felixpforte-q38056178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
