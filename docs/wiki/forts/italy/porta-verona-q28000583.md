# Porta Verona

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-verona-q28000583` |
| Coordinates | 45.43995, 10.69649 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.43995/10.69649)) |
| Wikidata | [Q28000583](https://www.wikidata.org/wiki/Q28000583) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Peschiera del Garda |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |
| OSM `description` | Fortified city of Peschiera del Garda |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 11, road 401, waterway 21, water 5, building 195, zone 35, wall 18, retaining-wall 3).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 7, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1551791471 historic=castle Q26258009 205 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 401 mapped (trace size budget); minor lanes are not drawn
- origin moved 206 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.43995/10.69649) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000583 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/porta-verona-q28000583.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
