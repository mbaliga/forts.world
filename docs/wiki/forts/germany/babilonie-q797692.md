# Babilonie

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `babilonie-q797692` |
| Coordinates | 52.27737, 8.57786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.27737/8.57786)) |
| Wikidata | [Q797692](https://www.wikidata.org/wiki/Q797692) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|mountain\|archaeological site |
| Administrative area | North Rhine-Westphalia |
| Inception | 0300 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `barrier` | earthworks |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, marker 1, road 51, zone 18, building 93, waterway 14, wall 1).

Evidence: documented 0, mapped 179, inferred 0, derived 0; heights documented 12, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6520523 historic=archaeological_site Q797692 23 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.27737/8.57786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|mountain\|archaeological site; sitelinks=5; wikidata:Q797692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 179 elements); data/traces/babilonie-q797692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
