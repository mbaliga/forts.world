# City walls of Sarzana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-sarzana-q113164404` |
| Coordinates | 44.11045, 9.96352 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.11045/9.96352)) |
| Wikidata | [Q113164404](https://www.wikidata.org/wiki/Q113164404) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Sarzana |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.fortezzafirmafede.it |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 2, road 196, waterway 5, building 349, wall 24, zone 9, water 2).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 16, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367779673 historic=castle Q28859651 176 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 196 mapped (trace size budget); minor lanes are not drawn
- origin moved 176 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.11045/9.96352) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q113164404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/city-walls-of-sarzana-q113164404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
