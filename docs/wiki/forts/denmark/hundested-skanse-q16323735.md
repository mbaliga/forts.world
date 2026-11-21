# Hundested Skanse

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hundested-skanse-q16323735` |
| Coordinates | 55.97078, 11.84983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.97078/11.84983)) |
| Wikidata | [Q16323735](https://www.wikidata.org/wiki/Q16323735) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Halsnæs Municipality |
| Inception | 1809 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 3 |
| OSM `historic` | fortification |
| OSM `fortification_type` | battery |
| OSM `website` | https://www.kulturarv.dk/fundogfortidsminder/Lokalitet/94721/ |

## What the model contains

Tier **T1**, status `outline-only`, 163 elements (outline 1, marker 4, road 26, cliff 1, water 2, coastline 1, building 126, zone 2).

Evidence: documented 0, mapped 163, inferred 0, derived 1; heights documented 1, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/442660932 historic=fortification Q16323735 9 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":172,"medianInside":1.9,"medianOutside":14.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.97078/11.84983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=3; wikidata:Q16323735 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 163 elements); data/traces/hundested-skanse-q16323735.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
