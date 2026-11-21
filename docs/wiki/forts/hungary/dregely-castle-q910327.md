# Drégely Castle

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dregely-castle-q910327` |
| Coordinates | 48.01662, 19.03609 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.01662/19.03609)) |
| Wikidata | [Q910327](https://www.wikidata.org/wiki/Q910327) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Drégelypalánk |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | 1274-1285 között építtették Hont Ders és Demeter. Csák Máté elfoglalta. 1321 után királyi vár. 1390: Tari családé. 1424: Zsigmond visszacserélte, az esztergomi érseké lett. 1552: hősies védelme után török elfoglalta. A romos várat a 17. századig lakták |
| OSM `ruins` | castle |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.turautak.com/cikkek/turautak/nagyoroszi--dregely-var-tura.html |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, marker 1, road 19, wall 7, zone 1, waterway 1, cliff 1).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/286188020 historic=castle Q910327 7 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.01662/19.03609) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=5; wikidata:Q910327 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/dregely-castle-q910327.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
