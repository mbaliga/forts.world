# Gangelt Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gangelt-castle-q1011908` |
| Coordinates | 50.9921, 5.99833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9921/5.99833)) |
| Wikidata | [Q1011908](https://www.wikidata.org/wiki/Q1011908) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gangelt |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 8 |
| OSM `description` | Im Mittelalter besitzt Gangelt auch eine alte schulische Tradition. Bereits eine Quelle des 14.Jhs. (1351) verzeichnet einen „rector scolarum“, möglicherweise ist das Schulwesen im Ort aber noch älter |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 34, road 113, building 462, zone 15, wall 24, water 1).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 0, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108157492 historic=building 84 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 462 mapped (trace size budget); the rest of the town is not drawn
- origin moved 85 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9921/5.99833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q1011908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/gangelt-castle-q1011908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
