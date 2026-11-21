# Porta Vesuvio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-vesuvio-q125810728` |
| Coordinates | 40.75338, 14.4841 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.75338/14.4841)) |
| Wikidata | [Q125810728](https://www.wikidata.org/wiki/Q125810728) (CC0) |
| Wikidata class | fort |
| Types | city gate\|fortification\|archaeological site |
| Administrative area | Pompei |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 396, zone 319, road 252, building 247, wall 4071, retaining-wall 2).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 0, inferred 0, unknown 319.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/395792282 historic=citywalls Q125810729 429 m from ledger point
- pruned to the outline plus 60 m: 5288 -> 5254 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 235 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 232 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the outline centre of 4857 mapped (trace size budget); the rest are not drawn
- origin moved 431 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.75338/14.4841) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city gate\|fortification\|archaeological site; sitelinks=2; wikidata:Q125810728 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/porta-vesuvio-q125810728.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
