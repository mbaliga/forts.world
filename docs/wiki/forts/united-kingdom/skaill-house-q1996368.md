# Skaill House

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skaill-house-q1996368` |
| Coordinates | 59.04768, -3.33649 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.04768/-3.33649)) |
| Wikidata | [Q1996368](https://www.wikidata.org/wiki/Q1996368) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|mansion\|country house |
| Administrative area | Orkney Islands |
| Designations | category A listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 65 elements (outline 1, road 25, water 3, building 6, zone 5, wall 24, coastline 1).

Evidence: documented 0, mapped 65, inferred 0, derived 0; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231942152 historic=castle Q1996368 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.04768/-3.33649) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|mansion\|country house; sitelinks=6; wikidata:Q1996368 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 65 elements); data/traces/skaill-house-q1996368.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
