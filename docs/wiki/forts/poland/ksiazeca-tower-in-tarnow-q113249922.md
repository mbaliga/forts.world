# Książęca Tower in Tarnów

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ksiazeca-tower-in-tarnow-q113249922` |
| Coordinates | 50.01361, 20.98747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.01361/20.98747)) |
| Wikidata | [Q113249922](https://www.wikidata.org/wiki/Q113249922) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tarnów |
| Inception | 1400 |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `website` | https://www.katedratarnowska.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 239 elements (outline 1, marker 11, waterway 1, road 158, building 287, zone 120, retaining-wall 1, wall 40, water 1).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 3, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180605882 historic=yes Q9167759 60 m from ledger point
- pruned to the outline plus 150 m: 620 -> 378 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 177 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 102 mapped (trace size budget); minor lanes are not drawn
- origin moved 60 m from the ledger point to the outline centroid
- 36 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.01361/20.98747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q113249922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 239 elements); data/traces/ksiazeca-tower-in-tarnow-q113249922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
