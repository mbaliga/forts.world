# Mignone

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mignone-q3312885` |
| Coordinates | 42.21722, 12.10983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.21722/12.10983)) |
| Wikidata | [Q3312885](https://www.wikidata.org/wiki/Q3312885) (CC0) |
| Wikidata class | castle |
| Types | castle\|castrum\|yes\|river |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `description` | Proposed hiking trail of the archaeological sites of the ancient Via Clodia. Problems. The current route does not pass through the Careias (Gaòeria) and Forum Clodii (San Liberato) mansiones as it has to cross private properties. |

## What the model contains

Tier **T1**, status `location-only`, 52 elements (marker 1, road 24, waterway 3, building 17, cliff 1, zone 6).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13775520 historic=yes 1067 m from ledger point
- site is a route relation of 148 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (6874 x 10281 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.21722/12.10983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castrum\|yes\|river; sitelinks=3; wikidata:Q3312885 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 52 elements); data/traces/mignone-q3312885.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
