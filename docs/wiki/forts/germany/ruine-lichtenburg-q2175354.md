# Ruine Lichtenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruine-lichtenburg-q2175354` |
| Coordinates | 50.4772, 10.2297 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4772/10.2297)) |
| Wikidata | [Q2175354](https://www.wikidata.org/wiki/Q2175354) (CC0) |
| Wikidata class | ruin |
| Types | castle\|archaeological site\|castle ruin |
| Administrative area | Ostheim vor der Rhön |
| Inception | 1159 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, road 35, zone 3, building 9, wall 2).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177217088 historic=castle Q2175354 10 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4772/10.2297) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|archaeological site\|castle ruin; sitelinks=3; wikidata:Q2175354 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/ruine-lichtenburg-q2175354.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
