# Can Boera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `can-boera-q9088879` |
| Coordinates | 41.91556, 3.16083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.91556/3.16083)) |
| Wikidata | [Q9088879](https://www.wikidata.org/wiki/Q9088879) (CC0) |
| Wikidata class | fort |
| Types | masia\|fortified house |
| Administrative area | Palafrugell |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, road 75, building 589, zone 24, wall 274).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 0, inferred 0, unknown 232.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173378097 historic=monument 235 m from ledger point
- pruned to the outline plus 150 m: 963 -> 568 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 340 mapped (trace size budget); the rest of the town is not drawn
- origin moved 235 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.91556/3.16083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; masia\|fortified house; sitelinks=3; wikidata:Q9088879 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/can-boera-q9088879.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
