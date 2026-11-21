# manoir de Kéroch'iou

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-keroch-iou-q22926046` |
| Coordinates | 48.60204, -3.84407 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.60204/-3.84407)) |
| Wikidata | [Q22926046](https://www.wikidata.org/wiki/Q22926046) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château\|manor estate |
| Administrative area | Morlaix |
| Inception | C16 |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, road 12, zone 2, coastline 2, building 11, waterway 1, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/78231923 historic=castle Q22926046 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":82,"medianInside":0.3,"medianOutside":26.1}
- sea-1: DEM check failed {"cells":364,"medianInside":22.8,"medianOutside":20.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.60204/-3.84407) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château\|manor estate; sitelinks=1; wikidata:Q22926046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/manoir-de-keroch-iou-q22926046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
