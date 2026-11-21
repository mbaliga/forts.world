# Römische Stadtmauer Mühlenbach, Köln

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `romische-stadtmauer-muhlenbach-koln-q106353991` |
| Coordinates | 50.93343, 6.95742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.93343/6.95742)) |
| Wikidata | [Q106353991](https://www.wikidata.org/wiki/Q106353991) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Altstadt-Süd |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `description` | Turm 47 nach Doppelfeld |
| OSM `website` | https://roemisch-germanisches-museum.de/Ubiermonument |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 19, road 384, building 478, wall 27, zone 22, water 1, retaining-wall 2, waterway 1).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 43, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1220332213 historic=citywalls Q23005613 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 478 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 384 mapped (trace size budget); minor lanes are not drawn
- origin moved 129 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.93343/6.95742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q106353991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/romische-stadtmauer-muhlenbach-koln-q106353991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
