# Castle Williams

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-williams-q1049532` |
| Coordinates | 40.69278, -74.01917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.69278/-74.01917)) |
| Wikidata | [Q1049532](https://www.wikidata.org/wiki/Q1049532) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Manhattan |
| Inception | 1807 |
| Designations | New York City Landmark\|National Register of Historic Places listed place |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `website` | https://www.nps.gov/gois/planyourvisit/explore-castle-williams.htm |

## What the model contains

Tier **T1**, status `outline-only`, 307 elements (outline 1, coastline 2, road 184, building 29, retaining-wall 6, zone 84, water 1).

Evidence: documented 0, mapped 307, inferred 0, derived 1; heights documented 8, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3700068 historic=fort Q1049532 15 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":222,"medianInside":0.6,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.69278/-74.01917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q1049532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 307 elements); data/traces/castle-williams-q1049532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
