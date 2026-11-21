# porta Maggiore

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-maggiore-q66819351` |
| Coordinates | 43.79561, 12.8537 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.79561/12.8537)) |
| Wikidata | [Q66819351](https://www.wikidata.org/wiki/Q66819351) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Mombaroccio |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, road 42, wall 4, building 97, zone 2).

Evidence: documented 0, mapped 147, inferred 0, derived 0; heights documented 0, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1098656879 historic=citywalls 38 m from ledger point
- origin moved 38 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.79561/12.8537) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q66819351 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 147 elements); data/traces/porta-maggiore-q66819351.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
