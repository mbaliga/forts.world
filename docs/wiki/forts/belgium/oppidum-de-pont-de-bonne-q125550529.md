# Oppidum de Pont-de-Bonne

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oppidum-de-pont-de-bonne-q125550529` |
| Coordinates | 50.45287, 5.28181 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.45287/5.28181)) |
| Wikidata | [Q125550529](https://www.wikidata.org/wiki/Q125550529) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|oppidum |
| Administrative area | Modave |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | 4 |
| OSM `description` | fortification celtique et carolingienne |
| OSM `website` | https://www.cahc.eu/fouilles/3 |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, road 64, waterway 9, building 109, cliff 10, zone 19, wall 7, water 1).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 0, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/667750444 historic=archaeological_site 41 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.45287/5.28181) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|oppidum; sitelinks=1; wikidata:Q125550529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/oppidum-de-pont-de-bonne-q125550529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
