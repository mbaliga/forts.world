# Castle of Carbedo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-carbedo-q20550285` |
| Coordinates | 42.63529, -7.12707 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.63529/-7.12707)) |
| Wikidata | [Q20550285](https://www.wikidata.org/wiki/Q20550285) (CC0) |
| Wikidata class | fort |
| Types | fortress\|monument |
| Administrative area | Esperante, Folgoso do Courel |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, zone 3, road 5, waterway 3, building 1, wall 2).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/368530953 historic=archaeological_site Q20550285 194 m from ledger point
- origin moved 195 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.63529/-7.12707) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|monument; sitelinks=3; wikidata:Q20550285 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/castle-of-carbedo-q20550285.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
