# Fort Morgan

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-morgan-q1234144` |
| Coordinates | 30.22806, -88.02306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.22806/-88.02306)) |
| Wikidata | [Q1234144](https://www.wikidata.org/wiki/Q1234144) (CC0) |
| Wikidata class | fort |
| Types | military museum\|artillery fort |
| Administrative area | Baldwin County |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 49 elements (outline 1, marker 1, road 26, coastline 2, building 13, retaining-wall 5, water 1).

Evidence: documented 0, mapped 49, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2644328 historic=fort Q1234144 654 m from ledger point
- origin moved 654 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":619,"medianInside":-3,"medianOutside":3.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.22806/-88.02306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military museum\|artillery fort; sitelinks=8; wikidata:Q1234144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 49 elements); data/traces/fort-morgan-q1234144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
