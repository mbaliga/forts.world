# Canterbury city walls

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `canterbury-city-walls-q15207190` |
| Coordinates | 51.2786, 1.08149 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2786/1.08149)) |
| Wikidata | [Q15207190](https://www.wikidata.org/wiki/Q15207190) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Canterbury |
| Designations | scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, road 177, zone 9, building 164, wall 5, waterway 2).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 13, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121814606 historic=castle Q2968772 579 m from ledger point
- origin moved 581 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2786/1.08149) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=6; wikidata:Q15207190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/canterbury-city-walls-q15207190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
