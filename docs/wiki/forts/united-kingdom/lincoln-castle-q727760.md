# Lincoln Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lincoln-castle-q727760` |
| Coordinates | 53.2349, -0.5409 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.2349/-0.5409)) |
| Wikidata | [Q727760](https://www.wikidata.org/wiki/Q727760) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|motte-and-bailey castle\|historic house museum |
| Administrative area | Lincoln |
| Inception | 1068 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 24 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.lincolncastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 6, road 318, building 578, wall 278, zone 24, retaining-wall 43).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 5, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/343197023 historic=castle Q727760 13 m from ledger point
- pruned to the outline plus 60 m: 1248 -> 445 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 147 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 142 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid
- 135 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.2349/-0.5409) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|motte-and-bailey castle\|historic house museum; sitelinks=24; wikidata:Q727760 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/lincoln-castle-q727760.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
