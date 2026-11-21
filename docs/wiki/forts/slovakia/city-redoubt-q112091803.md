# city redoubt

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-redoubt-q112091803` |
| Coordinates | 48.32741, 19.66933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.32741/19.66933)) |
| Wikidata | [Q112091803](https://www.wikidata.org/wiki/Q112091803) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Lučenec |
| Inception | 1856 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 264 elements (outline 1, marker 1, road 131, waterway 3, building 330, zone 8).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 10, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/56888467 historic=building Q112091813 52 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 330 mapped (trace size budget); the rest of the town is not drawn
- origin moved 51 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.32741/19.66933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=0; wikidata:Q112091803 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 264 elements); data/traces/city-redoubt-q112091803.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
