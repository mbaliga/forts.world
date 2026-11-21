# Ljubuški Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ljubuski-fortress-q25556753` |
| Coordinates | 43.20114, 17.55791 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.20114/17.55791)) |
| Wikidata | [Q25556753](https://www.wikidata.org/wiki/Q25556753) (CC0) |
| Wikidata class | fort |
| Types | heritage site\|fortress\|historic site |
| Administrative area | Ljubuški |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, road 16, zone 10, wall 25, building 23).

Evidence: documented 0, mapped 75, inferred 0, derived 0; heights documented 0, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/816686364 historic=castle 15 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.20114/17.55791) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; heritage site\|fortress\|historic site; sitelinks=5; wikidata:Q25556753 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/ljubuski-fortress-q25556753.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
