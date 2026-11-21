# HKB 1./971 Svaerholtklubben

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hkb-1-971-svaerholtklubben-q25923227` |
| Coordinates | 70.96798, 26.68545 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/70.96798/26.68545)) |
| Wikidata | [Q25923227](https://www.wikidata.org/wiki/Q25923227) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | 145mm long range (18km) gun |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, road 4, zone 3, coastline 3, building 2, cliff 1, water 3).

Evidence: documented 0, mapped 17, inferred 0, derived 3; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/215296125 historic=yes 112 m from ledger point
- origin moved 111 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":0,"medianOutside":137}
- sea-1: DEM check ok {"cells":12,"medianInside":0,"medianOutside":137.1}
- sea-2: DEM check failed {"cells":400,"medianInside":139.4,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/70.96798/26.68545) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q25923227 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 17 elements); data/traces/hkb-1-971-svaerholtklubben-q25923227.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
