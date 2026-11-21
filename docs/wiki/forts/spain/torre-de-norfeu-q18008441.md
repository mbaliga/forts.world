# Torre de Norfeu

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-norfeu-q18008441` |
| Coordinates | 42.24341, 3.25027 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.24341/3.25027)) |
| Wikidata | [Q18008441](https://www.wikidata.org/wiki/Q18008441) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|watchtower |
| Administrative area | Roses |
| Inception | 1600 |
| Designations | Cultural Asset of Local Interest\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, marker 1, road 12, coastline 2, zone 1, cliff 1, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/287240487 historic=ruins Q18008441 0 m from ledger point
- sea-0: DEM check ok {"cells":6,"medianInside":0,"medianOutside":104.4}
- sea-1: DEM check ok {"cells":3,"medianInside":0.4,"medianOutside":104.3}
- 46 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.24341/3.25027) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|watchtower; sitelinks=2; wikidata:Q18008441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/torre-de-norfeu-q18008441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
