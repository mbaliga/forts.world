# Mura di Castro

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mura-di-castro-q113585444` |
| Coordinates | 42.53267, 11.64916 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.53267/11.64916)) |
| Wikidata | [Q113585444](https://www.wikidata.org/wiki/Q113585444) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ischia di Castro |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `description` | Proposed hiking trail of the archaeological sites of the ancient Via Clodia. Problems. The current route does not pass through the Careias (Gaòeria) and Forum Clodii (San Liberato) mansiones as it has to cross private properties. |

## What the model contains

Tier **T1**, status `location-only`, 43 elements (marker 5, road 20, waterway 2, building 11, zone 1, cliff 4).

Evidence: documented 0, mapped 43, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13775515 historic=yes 6887 m from ledger point
- site is a route relation of 34 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4042 x 10924 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.53267/11.64916) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113585444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 43 elements); data/traces/mura-di-castro-q113585444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
