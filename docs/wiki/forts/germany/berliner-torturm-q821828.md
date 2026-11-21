# Berliner Torturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berliner-torturm-q821828` |
| Coordinates | 52.2735, 11.8645 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2735/11.8645)) |
| Wikidata | [Q821828](https://www.wikidata.org/wiki/Q821828) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortified tower |
| Administrative area | Burg |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Berliner Torturm, Berliner Straße 34a in Burg (bei Magdeburg) |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 235 elements (outline 1, road 78, building 439, waterway 13, wall 19, zone 4).

Evidence: documented 0, mapped 235, inferred 0, derived 0; heights documented 19, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161278366 historic=yes Q821828 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 439 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2735/11.8645) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortified tower; sitelinks=2; wikidata:Q821828 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 235 elements); data/traces/berliner-torturm-q821828.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
