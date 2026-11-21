# Gaulskopf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gaulskopf-q1450058` |
| Coordinates | 51.50242, 9.048 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.50242/9.048)) |
| Wikidata | [Q1450058](https://www.wikidata.org/wiki/Q1450058) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|mountain\|archaeological site |
| Administrative area | North Rhine-Westphalia |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | earthworks |

## What the model contains

Tier **T1**, status `outline-only`, 12 elements (outline 1, marker 1, road 8, zone 2).

Evidence: documented 0, mapped 12, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6522456 historic=archaeological_site Q1450058 152 m from ledger point
- origin moved 217 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.50242/9.048) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|mountain\|archaeological site; sitelinks=2; wikidata:Q1450058 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 12 elements); data/traces/gaulskopf-q1450058.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
