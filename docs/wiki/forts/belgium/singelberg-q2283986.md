# Singelberg

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `singelberg-q2283986` |
| Coordinates | 51.23534, 4.24478 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.23534/4.24478)) |
| Wikidata | [Q2283986](https://www.wikidata.org/wiki/Q2283986) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle\|motte |
| Administrative area | Beveren |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | motte |
| OSM `heritage` | 4 |
| OSM `description` | Motte opgeworpen in de 12e eeuw |
| OSM `website` | https://oar.onroerenderfgoed.be/publicaties/ARBE/208/ARBE208-001.pdf |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, road 6, waterway 4, zone 11).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88716534 historic=archaeological_site 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.23534/4.24478) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle\|motte; sitelinks=1; wikidata:Q2283986 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/singelberg-q2283986.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
