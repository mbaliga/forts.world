# Savaria

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `savaria-q3944220` |
| Coordinates | 47.23186, 16.62009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.23186/16.62009)) |
| Wikidata | [Q3944220](https://www.wikidata.org/wiki/Q3944220) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|yes\|Roman city |
| Administrative area | Szombathely |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 23, road 770, building 658, zone 11, wall 42, retaining-wall 10, water 2, waterway 4).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 60, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/574879808 historic=archaeological_site Q3944220 39 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 658 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 770 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.23186/16.62009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|yes\|Roman city; sitelinks=7; wikidata:Q3944220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/savaria-q3944220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
