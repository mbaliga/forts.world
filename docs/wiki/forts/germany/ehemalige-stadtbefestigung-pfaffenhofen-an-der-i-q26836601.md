# Ehemalige Stadtbefestigung (Pfaffenhofen an der Ilm)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ehemalige-stadtbefestigung-pfaffenhofen-an-der-i-q26836601` |
| Coordinates | 48.53059, 11.50633 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.53059/11.50633)) |
| Wikidata | [Q26836601](https://www.wikidata.org/wiki/Q26836601) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Pfaffenhofen an der Ilm |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 9, road 205, building 249, waterway 6, zone 6, wall 13, retaining-wall 5, water 2).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 8, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46041523 historic=citywalls Q98747033 242 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 242 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.53059/11.50633) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=2; wikidata:Q26836601 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/ehemalige-stadtbefestigung-pfaffenhofen-an-der-i-q26836601.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
