# Puka Pukara

> Peru · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `puka-pukara-q2390374` |
| Coordinates | -13.48335, -71.96222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-13.48335/-71.96222)) |
| Wikidata | [Q2390374](https://www.wikidata.org/wiki/Q2390374) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|archaeological site |
| Administrative area | Cusco Province |
| Designations | cultural heritage of Peru |
| Wikipedia language editions | 18 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 31, waterway 1, building 3, wall 16, zone 20).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 16, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37082862 historic=archaeological_site Q2390374 7 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-13.48335/-71.96222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|archaeological site; sitelinks=18; wikidata:Q2390374 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/puka-pukara-q2390374.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/peru.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
