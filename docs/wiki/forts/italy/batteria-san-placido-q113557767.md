# Batteria San Placido

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batteria-san-placido-q113557767` |
| Coordinates | 38.05008, 15.4694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.05008/15.4694)) |
| Wikidata | [Q113557767](https://www.wikidata.org/wiki/Q113557767) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Scaletta Zanclea |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 2, road 52, coastline 1, waterway 2, building 176, retaining-wall 49, wall 20, zone 9, water 1).

Evidence: documented 0, mapped 314, inferred 0, derived 1; heights documented 0, inferred 0, unknown 246.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192235582 historic=fort 20 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":43,"medianInside":0,"medianOutside":42.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.05008/15.4694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113557767 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/batteria-san-placido-q113557767.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
