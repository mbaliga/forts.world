# Born Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `born-castle-q139269180` |
| Coordinates | 51.2407, 6.2083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2407/6.2083)) |
| Wikidata | [Q139269180](https://www.wikidata.org/wiki/Q139269180) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Brüggen |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 8 |
| OSM `description` | ursprünglich 1-schiffige, später 3-schiffig erweiterte Backstein Hallenkirche mit Kreuzrippengewölbe, polygonaler Chorschluß und 3-geschossiger vorgesetzter Westturm von 1467 |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, marker 2, road 66, water 4, zone 27, waterway 9, building 301, wall 1).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173241499 historic=building Q2322456 306 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 301 mapped (trace size budget); the rest of the town is not drawn
- origin moved 306 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2407/6.2083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q139269180 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/born-castle-q139269180.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
