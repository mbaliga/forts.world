# Castle Lachlan

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-lachlan-q11839510` |
| Coordinates | 56.11134, -5.1972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.11134/-5.1972)) |
| Wikidata | [Q11839510](https://www.wikidata.org/wiki/Q11839510) (CC0) |
| Wikidata class | castle |
| Types | castle\|country house |
| Administrative area | Argyll and Bute |
| Designations | category C listed building |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, coastline 1, road 10, zone 2, wall 1, waterway 4, building 8).

Evidence: documented 0, mapped 27, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223554899 historic=castle Q11839510 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.11134/-5.1972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|country house; sitelinks=4; wikidata:Q11839510 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 27 elements); data/traces/castle-lachlan-q11839510.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
