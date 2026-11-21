# Talaia de Calafell

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `talaia-de-calafell-q18008270` |
| Coordinates | 41.1993, 1.59095 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.1993/1.59095)) |
| Wikidata | [Q18008270](https://www.wikidata.org/wiki/Q18008270) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Calafell |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 8 |
| OSM `description` | Atalaya defensiva posiblemente construida a principios del siglo XV para alertar de incursiones piratas en la costa. El vigía hacía sonar caracolas marinas para avisar a la población, que se refugiaba en el castillo. Pudo utilizarse hasta el siglo XVIII. |
| OSM `ruins` | yes |
| OSM `website` | https://calafell.cat/sites/default/files/poum/APOUM/08/catalergsmasies.pdf |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, road 23, zone 1, building 1, waterway 2).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1271210117 historic=archaeological_site 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.1993/1.59095) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q18008270 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/talaia-de-calafell-q18008270.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
