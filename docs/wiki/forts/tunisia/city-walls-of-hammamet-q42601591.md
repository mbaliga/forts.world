# City walls of Hammamet

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-hammamet-q42601591` |
| Coordinates | 36.39525, 10.61318 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.39525/10.61318)) |
| Wikidata | [Q42601591](https://www.wikidata.org/wiki/Q42601591) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Hammamet |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 82 elements (outline 1, marker 2, road 63, zone 2, coastline 2, building 7, wall 4, water 1).

Evidence: documented 0, mapped 82, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15036671 historic=castle Q42601554 106 m from ledger point
- origin moved 100 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":686,"medianInside":0.2,"medianOutside":5.6}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.39525/10.61318) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q42601591 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 82 elements); data/traces/city-walls-of-hammamet-q42601591.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
