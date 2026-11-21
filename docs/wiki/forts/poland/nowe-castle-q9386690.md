# Nowe Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nowe-castle-q9386690` |
| Coordinates | 53.6463, 18.731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.6463/18.731)) |
| Wikidata | [Q9386690](https://www.wikidata.org/wiki/Q9386690) (CC0) |
| Wikidata class | castle |
| Types | Ordensburg |
| Administrative area | Nowe |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Pierwsza wzmianka o zamku pochodzi z 1255 roku. Krzyżacy w 1308 roku zajęli zamek nowski. Krzyżacy przebudowali w latach 1350-1405 drewniano-ziemny gród w murowaną twierdzę. Zamek przeszedł w ręce polskie w 1465 roku, stał się siedzibą starosty. |
| OSM `ruins` | yes |
| OSM `website` | https://www.zamki.pl/?idzamku=nowe |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, road 70, waterway 2, wall 9, building 181, cliff 3, zone 6).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 5, inferred 0, unknown 185.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/870691618 historic=castle Q9386690 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.6463/18.731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Ordensburg; sitelinks=4; wikidata:Q9386690 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/nowe-castle-q9386690.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
