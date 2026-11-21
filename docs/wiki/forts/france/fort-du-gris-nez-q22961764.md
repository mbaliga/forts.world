# Fort du Gris-Nez

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-gris-nez-q22961764` |
| Coordinates | 50.87102, 1.58698 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.87102/1.58698)) |
| Wikidata | [Q22961764](https://www.wikidata.org/wiki/Q22961764) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Audinghen |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 57 elements (outline 1, marker 1, road 16, building 33, cliff 1, coastline 1, zone 3, water 1).

Evidence: documented 0, mapped 57, inferred 0, derived 1; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1212377498 historic=yes 53 m from ledger point
- origin moved 53 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":160,"medianInside":6.7,"medianOutside":28.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.87102/1.58698) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22961764 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 57 elements); data/traces/fort-du-gris-nez-q22961764.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
