# Stadttor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q38134086` |
| Coordinates | 48.36614, 15.41216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.36614/15.41216)) |
| Wikidata | [Q38134086](https://www.wikidata.org/wiki/Q38134086) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Spitz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | http://www.burgen-austria.com/Archiv.asp?Artikel=Spitz%20-%20Niederhaus |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, marker 2, road 61, zone 10, building 152, wall 17, retaining-wall 1, waterway 3).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 0, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1550060 historic=castle Q37961655 64 m from ledger point
- origin moved 66 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.36614/15.41216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q38134086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/stadttor-q38134086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
