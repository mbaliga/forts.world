# Bazarowa Island Entrenchment in Torun

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bazarowa-island-entrenchment-in-torun-q97824039` |
| Coordinates | 53.00417, 18.61028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.00417/18.61028)) |
| Wikidata | [Q97824039](https://www.wikidata.org/wiki/Q97824039) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Toruń |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.tak.torun.pl/en/castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 3, road 429, water 1, wall 65, building 151, zone 121, waterway 9, retaining-wall 1).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 21, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80579965 historic=castle Q9386586 562 m from ledger point
- pruned to the outline plus 150 m: 781 -> 649 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 101 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 366 mapped (trace size budget); minor lanes are not drawn
- origin moved 562 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.00417/18.61028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q97824039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/bazarowa-island-entrenchment-in-torun-q97824039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
