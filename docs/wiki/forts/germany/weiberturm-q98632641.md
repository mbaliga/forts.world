# Weiberturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `weiberturm-q98632641` |
| Coordinates | 49.37754, 10.18422 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.37754/10.18422)) |
| Wikidata | [Q98632641](https://www.wikidata.org/wiki/Q98632641) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Rothenburg ob der Tauber |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 4, road 272, zone 38, building 423, waterway 1, wall 126, water 1, retaining-wall 16).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 45, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1301606468 historic=citywalls 38 m from ledger point
- pruned to the outline plus 150 m: 882 -> 512 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 216 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 179 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the centre of the mapped site
- 32 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.37754/10.18422) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98632641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/weiberturm-q98632641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
