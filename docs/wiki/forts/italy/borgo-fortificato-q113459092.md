# Borgo fortificato

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borgo-fortificato-q113459092` |
| Coordinates | 44.1488, 10.41008 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.1488/10.41008)) |
| Wikidata | [Q113459092](https://www.wikidata.org/wiki/Q113459092) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Castiglione di Garfagnana |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 261 elements (marker 4, road 102, building 138, wall 10, zone 5, waterway 1, water 1).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 0, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10113697 historic=citywalls Q55120004 16 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (226 x 244 m)
- origin moved 47 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.1488/10.41008) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113459092 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 261 elements); data/traces/borgo-fortificato-q113459092.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
