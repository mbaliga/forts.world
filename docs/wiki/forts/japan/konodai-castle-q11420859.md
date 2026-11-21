# Kōnodai Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konodai-castle-q11420859` |
| Coordinates | 35.7482, 139.89833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.7482/139.89833)) |
| Wikidata | [Q11420859](https://www.wikidata.org/wiki/Q11420859) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kōnodai |
| Inception | 1479 |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 91 elements (outline 1, road 22, waterway 1, building 61, zone 6).

Evidence: documented 0, mapped 91, inferred 0, derived 0; heights documented 0, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1521246082 historic=archaeological_site 559 m from ledger point
- origin moved 564 m from the ledger point to the centre of the mapped site
- 106 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.7482/139.89833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11420859 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 91 elements); data/traces/konodai-castle-q11420859.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
