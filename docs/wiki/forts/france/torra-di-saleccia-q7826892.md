# Torra di Saleccia

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-saleccia-q7826892` |
| Coordinates | 42.6394, 8.97588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.6394/8.97588)) |
| Wikidata | [Q7826892](https://www.wikidata.org/wiki/Q7826892) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|Genoese towers in Corsica |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 1, road 5, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1411100179 historic=ruins Q7826892 1 m from ledger point
- sea-0: DEM check ok {"cells":189,"medianInside":0,"medianOutside":9.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.6394/8.97588) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|Genoese towers in Corsica; sitelinks=3; wikidata:Q7826892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/torra-di-saleccia-q7826892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
