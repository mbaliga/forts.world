# Porta da Vila, Viveiro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-da-vila-viveiro-q6091890` |
| Coordinates | 43.66047, -7.59497 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.66047/-7.59497)) |
| Wikidata | [Q6091890](https://www.wikidata.org/wiki/Q6091890) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|monument |
| Administrative area | Viveiro |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 7, road 127, building 514, wall 11, zone 16, waterway 3, retaining-wall 2, coastline 1).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 1, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192761397 historic=archaeological_site 181 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 514 mapped (trace size budget); the rest of the town is not drawn
- origin moved 179 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.66047/-7.59497) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|monument; sitelinks=3; wikidata:Q6091890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/porta-da-vila-viveiro-q6091890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
