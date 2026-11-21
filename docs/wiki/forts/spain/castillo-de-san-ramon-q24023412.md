# Castillo de San Ramón

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-ramon-q24023412` |
| Coordinates | 36.86366, -2.0043 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.86366/-2.0043)) |
| Wikidata | [Q24023412](https://www.wikidata.org/wiki/Q24023412) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|castle |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `website` | https://www.xn--castillosdeespaa-lub.es/es/content/rodalquilar-bateria-de |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, wall 3, road 14, cliff 2, coastline 2, building 3, zone 1, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19937145 historic=castle Q24023412 7 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":182,"medianInside":0,"medianOutside":16}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.86366/-2.0043) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|castle; sitelinks=2; wikidata:Q24023412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 27 elements); data/traces/castillo-de-san-ramon-q24023412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
