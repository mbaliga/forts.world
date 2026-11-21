# Rindö Redoubt

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rindo-redoubt-q10655449` |
| Coordinates | 59.40611, 18.36694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.40611/18.36694)) |
| Wikidata | [Q10655449](https://www.wikidata.org/wiki/Q10655449) (CC0) |
| Wikidata class | fort |
| Types | redoubt\|heritage site in Sweden\|architectural ensemble |
| Administrative area | Vaxholm Municipality |
| Inception | 1864 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Built as a complement to Vaxholm Castle to protect seaways to Stockholm. Went out of use in 1925 |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, road 46, coastline 4, building 31, wall 2, waterway 1, retaining-wall 1, zone 1, water 4).

Evidence: documented 0, mapped 91, inferred 0, derived 4; heights documented 1, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/459200076 historic=fort Q10655449 91 m from ledger point
- origin moved 85 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":504,"medianInside":5.3,"medianOutside":18.3}
- sea-1: DEM check ok {"cells":2,"medianInside":5.2,"medianOutside":9.6}
- sea-2: DEM check ok {"cells":1010,"medianInside":9.6,"medianOutside":11}
- sea-3: DEM check failed {"cells":997,"medianInside":9.8,"medianOutside":8.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.40611/18.36694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt\|heritage site in Sweden\|architectural ensemble; sitelinks=2; wikidata:Q10655449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/rindo-redoubt-q10655449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
