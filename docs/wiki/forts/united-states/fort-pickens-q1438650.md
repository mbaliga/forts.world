# Fort Pickens

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pickens-q1438650` |
| Coordinates | 30.32694, -87.29056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.32694/-87.29056)) |
| Wikidata | [Q1438650](https://www.wikidata.org/wiki/Q1438650) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Escambia County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `heritage` | yes |
| OSM `website` | https://www.nps.gov/guis/learn/historyculture/fort-pickens.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, marker 8, road 36, coastline 2, building 16, waterway 1, zone 2, wall 11, water 2, retaining-wall 12).

Evidence: documented 0, mapped 91, inferred 0, derived 0; heights documented 1, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1010224022 historic=fort Q1438650 26 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.32694/-87.29056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q1438650 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/fort-pickens-q1438650.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
