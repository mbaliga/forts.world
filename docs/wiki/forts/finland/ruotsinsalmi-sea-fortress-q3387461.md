# Ruotsinsalmi Sea Fortress

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruotsinsalmi-sea-fortress-q3387461` |
| Coordinates | 60.45103, 26.95003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.45103/26.95003)) |
| Wikidata | [Q3387461](https://www.wikidata.org/wiki/Q3387461) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortification system |
| Administrative area | Kotka |
| Inception | 1791 |
| Designations | Cultural Heritage Site of National Significance |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 103 elements (outline 1, road 52, building 37, water 2, zone 8, coastline 1, waterway 2).

Evidence: documented 0, mapped 103, inferred 0, derived 1; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12535045 historic=fort Q3387461 445 m from ledger point
- origin moved 702 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":71,"medianInside":2,"medianOutside":11.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.45103/26.95003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortification system; sitelinks=6; wikidata:Q3387461 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 103 elements); data/traces/ruotsinsalmi-sea-fortress-q3387461.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
