# City fortifications (city wall, Cheibenturm tower, Zytturm tower, Knopfliturm tower, Huwilerturm tower, Pulverturm tower, Kapuzinerturm tower, Schatzturm tower, Liebfrauen chapel)

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-fortifications-city-wall-cheibenturm-tower--q136296130` |
| Coordinates | 47.16615, 8.51515 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.16615/8.51515)) |
| Wikidata | [Q136296130](https://www.wikidata.org/wiki/Q136296130) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|city walls\|cultural heritage ensemble |
| Administrative area | Zug |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.burgzug.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 1, road 235, building 316, wall 19, waterway 4, retaining-wall 4, zone 4).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 7, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192218312 historic=castle Q186586 163 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 316 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 164 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.16615/8.51515) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|city walls\|cultural heritage ensemble; sitelinks=1; wikidata:Q136296130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/city-fortifications-city-wall-cheibenturm-tower--q136296130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
