# Cornatel Castle

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cornatel-castle-q5757260` |
| Coordinates | 42.4877, -6.69312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.4877/-6.69312)) |
| Wikidata | [Q5757260](https://www.wikidata.org/wiki/Q5757260) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Priaranza del Bierzo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (wall 1, zone 1, road 13, cliff 1, building 4).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 1, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9561898 historic=castle Q5757260 25 m from ledger point
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.4877/-6.69312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=3; wikidata:Q5757260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/cornatel-castle-q5757260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
