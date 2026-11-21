# King William Street tube station

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-william-street-tube-station-q1684782` |
| Coordinates | 51.51028, -0.08694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.51028/-0.08694)) |
| Wikidata | [Q1684782](https://www.wikidata.org/wiki/Q1684782) (CC0) |
| Wikidata class | fortification |
| Types | railway station\|air-raid shelter\|metro station\|underground station |
| Administrative area | City of London |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.hrp.org.uk/toweroflondon |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 3, road 164, building 48, zone 6, wall 7, retaining-wall 8, waterway 2, water 1).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 18, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/370870741 historic=castle Q62378 770 m from ledger point
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 771 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.51028/-0.08694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; railway station\|air-raid shelter\|metro station\|underground station; sitelinks=8; wikidata:Q1684782 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/king-william-street-tube-station-q1684782.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
