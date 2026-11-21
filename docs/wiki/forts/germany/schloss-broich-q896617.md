# Schloss Broich

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-broich-q896617` |
| Coordinates | 51.4271, 6.87133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4271/6.87133)) |
| Wikidata | [Q896617](https://www.wikidata.org/wiki/Q896617) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mülheim an der Ruhr |
| Inception | 0884 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Das Schloss Broich befindet sich im gleichnamigen Stadtteil Broich der Stadt Mülheim an der Ruhr am Westufer der Ruhr nahe der Innenstadt. Die Befestigungsanlage liegt an der historischen Ruhrfurt des alten Hellwegs und ist in Teilen der älteste erhaltene |

## What the model contains

Tier **T1**, status `location-only`, 315 elements (marker 9, road 370, water 11, building 91, retaining-wall 6, waterway 7, wall 10, zone 31).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 21, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1736460 historic=castle Q896617 36 m from ledger point
- roads capped: kept the 150 longest of 370 mapped (trace size budget); minor lanes are not drawn
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4271/6.87133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q896617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 315 elements); data/traces/schloss-broich-q896617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
