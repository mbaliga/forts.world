# Stadtburg Göttingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtburg-gottingen-q107703190` |
| Coordinates | 51.53633, 9.93716 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.53633/9.93716)) |
| Wikidata | [Q107703190](https://www.wikidata.org/wiki/Q107703190) (CC0) |
| Wikidata class | castle |
| Types | landesburg |
| Administrative area | Göttingen |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | yes |
| OSM `description` | Mauerturm, in der Turmstaße von Göttingen. Der einzige erhaltene Turm mit Resten der Stadtmauer. |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 14, road 88, waterway 1, building 292, wall 6, water 1, zone 9, retaining-wall 4).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 66, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42582203 historic=citywalls 699 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 292 mapped (trace size budget); the rest of the town is not drawn
- origin moved 699 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.53633/9.93716) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; landesburg; sitelinks=1; wikidata:Q107703190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/stadtburg-gottingen-q107703190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
