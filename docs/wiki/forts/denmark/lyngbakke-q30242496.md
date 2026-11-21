# Lyngbakke

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lyngbakke-q30242496` |
| Coordinates | 54.96848, 10.85804 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.96848/10.85804)) |
| Wikidata | [Q30242496](https://www.wikidata.org/wiki/Q30242496) (CC0) |
| Wikidata class | fortification |
| Types | sconce\|ancient monument |
| Administrative area | Langeland Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |
| OSM `description` | Kanon Skanse |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, coastline 1, zone 2, road 5, waterway 20, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/610790785 historic=archaeological_site Q30242496 39 m from ledger point
- origin moved 40 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":105,"medianInside":2.5,"medianOutside":7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.96848/10.85804) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce\|ancient monument; sitelinks=0; wikidata:Q30242496 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/lyngbakke-q30242496.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
