# Château-Regnault

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-regnault-q2967804` |
| Coordinates | 49.86024, 4.74099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.86024/4.74099)) |
| Wikidata | [Q2967804](https://www.wikidata.org/wiki/Q2967804) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|castle\|castle\|historical country |
| Administrative area | Bogny-sur-Meuse |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | castle |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 193 elements (outline 1, marker 2, road 59, building 343, waterway 1, zone 5, cliff 5).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1578357733 historic=archaeological_site Q2967804 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 343 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.86024/4.74099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|castle\|castle\|historical country; sitelinks=4; wikidata:Q2967804 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 193 elements); data/traces/chateau-regnault-q2967804.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
