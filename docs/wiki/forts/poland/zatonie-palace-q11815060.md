# Zatonie Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zatonie-palace-q11815060` |
| Coordinates | 51.86006, 15.56282 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.86006/15.56282)) |
| Wikidata | [Q11815060](https://www.wikidata.org/wiki/Q11815060) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|stately_manor\|palace |
| Administrative area | Zielona Góra |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `ruins` | stately_manor |
| OSM `website` | https://visitzielonagora.pl/park-zatonie/ |

## What the model contains

Tier **T1**, status `outline+walls`, 175 elements (outline 1, marker 2, road 93, wall 3, building 50, waterway 14, water 3, zone 9).

Evidence: documented 0, mapped 175, inferred 0, derived 0; heights documented 5, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/868540548 historic=castle Q11815060 4 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.86006/15.56282) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|stately_manor\|palace; sitelinks=3; wikidata:Q11815060 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 175 elements); data/traces/zatonie-palace-q11815060.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
