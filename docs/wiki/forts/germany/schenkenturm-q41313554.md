# Schenkenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schenkenturm-q41313554` |
| Coordinates | 49.81604, 9.89905 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.81604/9.89905)) |
| Wikidata | [Q41313554](https://www.wikidata.org/wiki/Q41313554) (CC0) |
| Wikidata class | ruin |
| Types | tower\|castle ruin |
| Administrative area | Würzburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://wuerzburgwiki.de/wiki/Burg_Schenkenschloss |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, marker 1, road 25, building 13, zone 8, wall 5).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 2, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106100759 historic=castle Q41313554 6 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.81604/9.89905) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; tower\|castle ruin; sitelinks=2; wikidata:Q41313554 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/schenkenturm-q41313554.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
