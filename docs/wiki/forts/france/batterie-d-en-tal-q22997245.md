# batterie d'En Tal

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batterie-d-en-tal-q22997245` |
| Coordinates | 47.39322, -2.94169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.39322/-2.94169)) |
| Wikidata | [Q22997245](https://www.wikidata.org/wiki/Q22997245) (CC0) |
| Wikidata class | fort |
| Types | fort\|artillery battery |
| Administrative area | Île-d'Houat |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, marker 1, road 9, zone 1, coastline 1, building 1, water 2).

Evidence: documented 0, mapped 16, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/308805010 historic=fort Q22997245 2 m from ledger point
- sea-0: DEM check ok {"cells":40,"medianInside":0.1,"medianOutside":2}
- sea-1: DEM check ok {"cells":34,"medianInside":0,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.39322/-2.94169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|artillery battery; sitelinks=1; wikidata:Q22997245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/batterie-d-en-tal-q22997245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
