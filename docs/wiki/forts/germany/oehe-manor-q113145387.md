# Oehe Manor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oehe-manor-q113145387` |
| Coordinates | 54.70708, 10.00298 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.70708/10.00298)) |
| Wikidata | [Q113145387](https://www.wikidata.org/wiki/Q113145387) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house |
| Administrative area | Maasholm |
| Designations | Heritage monument in Schleswig-Holstein |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, road 15, zone 7, coastline 1, building 16, water 5, waterway 2).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 3, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118620016 historic=castle Q113145387 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":24,"medianInside":-2,"medianOutside":2.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.70708/10.00298) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house; sitelinks=1; wikidata:Q113145387 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 47 elements); data/traces/oehe-manor-q113145387.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
