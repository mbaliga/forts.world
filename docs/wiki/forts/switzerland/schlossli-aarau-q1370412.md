# Schlössli Aarau

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlossli-aarau-q1370412` |
| Coordinates | 47.39442, 8.04523 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.39442/8.04523)) |
| Wikidata | [Q1370412](https://www.wikidata.org/wiki/Q1370412) (CC0) |
| Wikidata class | castle |
| Types | tower\|castle\|museum |
| Administrative area | Aarau |
| Inception | 1201 |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |
| OSM `description` | Äusseres Laurenzentor Schlichtes Mauertor ca. 1310 entstanden. Ausbau zum Torturm im späten 14. oder erst im frühen 15. Jahrhundert. Späterer Vorbau eines Torhauses im des 15. und 16. Jahrhundert in den Stadtgraben. Abbruch Anfang 19. Jahrhundert. |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 3, road 299, waterway 29, building 264, zone 12, wall 12, water 2, retaining-wall 1).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 91, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/480308010 historic=ruins 114 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 264 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 299 mapped (trace size budget); minor lanes are not drawn
- origin moved 114 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.39442/8.04523) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; tower\|castle\|museum; sitelinks=6; wikidata:Q1370412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/schlossli-aarau-q1370412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
