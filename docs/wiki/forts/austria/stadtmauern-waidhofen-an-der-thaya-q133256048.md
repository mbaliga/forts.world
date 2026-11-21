# Stadtmauern Waidhofen an der Thaya

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauern-waidhofen-an-der-thaya-q133256048` |
| Coordinates | 48.81613, 15.28375 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81613/15.28375)) |
| Wikidata | [Q133256048](https://www.wikidata.org/wiki/Q133256048) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Waidhofen an der Thaya |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |
| OSM `website` | https://de.wikipedia.org/wiki/Stadtbefestigung_Waidhofen_an_der_Thaya |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 5, road 127, building 313, waterway 4, wall 15, zone 17, water 2).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 41, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18806833 historic=citywalls 203 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 313 mapped (trace size budget); the rest of the town is not drawn
- origin moved 290 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81613/15.28375) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=2; wikidata:Q133256048 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/stadtmauern-waidhofen-an-der-thaya-q133256048.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
