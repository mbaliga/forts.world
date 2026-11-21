# Fort Orford

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-orford-q138304063` |
| Coordinates | 42.74583, -124.49611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.74583/-124.49611)) |
| Wikidata | [Q138304063](https://www.wikidata.org/wiki/Q138304063) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Site of the Port Orford Lifeboat Station, constructed in 1934, closed in 1970. the compound included: an observation tower, boathouse, Officer-in-Charge residence and a two-story building housing an office and quarters for the crew. |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, road 1, coastline 1, water 1).

Evidence: documented 0, mapped 4, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/947727052 historic=yes 1356 m from ledger point
- origin moved 1324 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":1.8,"medianOutside":71.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.74583/-124.49611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q138304063 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 4 elements); data/traces/fort-orford-q138304063.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
