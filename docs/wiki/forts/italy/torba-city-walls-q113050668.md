# Torba city walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torba-city-walls-q113050668` |
| Coordinates | 45.7301, 8.86249 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7301/8.86249)) |
| Wikidata | [Q113050668](https://www.wikidata.org/wiki/Q113050668) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Gornate-Olona |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `ruins` | wall |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, road 19, waterway 2, building 9, zone 5, wall 2).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 4, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173633781 historic=citywalls Q113050668 2 m from ledger point
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7301/8.86249) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q113050668 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/torba-city-walls-q113050668.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
