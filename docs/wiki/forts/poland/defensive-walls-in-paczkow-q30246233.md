# Defensive walls in Paczków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-paczkow-q30246233` |
| Coordinates | 50.46407, 17.00654 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46407/17.00654)) |
| Wikidata | [Q30246233](https://www.wikidata.org/wiki/Q30246233) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fortified tower |
| Administrative area | Paczków |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `description` | Mury obronne z basztami |
| OSM `barrier` | city_wall |
| OSM `website` | https://paczkow.pl/106/mury-obronne-z-xvi-w.html |

## What the model contains

Tier **T1**, status `outline+walls`, 367 elements (outline 1, marker 8, road 215, building 270, retaining-wall 23, wall 29, zone 34, water 1).

Evidence: documented 0, mapped 367, inferred 0, derived 0; heights documented 119, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297143829 historic=citywalls Q30246231 143 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 270 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 215 mapped (trace size budget); minor lanes are not drawn
- origin moved 143 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46407/17.00654) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fortified tower; sitelinks=3; wikidata:Q30246233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 367 elements); data/traces/defensive-walls-in-paczkow-q30246233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
