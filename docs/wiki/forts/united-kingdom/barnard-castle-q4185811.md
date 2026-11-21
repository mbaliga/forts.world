# Barnard Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barnard-castle-q4185811` |
| Coordinates | 54.54333, -1.92667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.54333/-1.92667)) |
| Wikidata | [Q4185811](https://www.wikidata.org/wiki/Q4185811) (CC0) |
| Wikidata class | castle |
| Types | archaeological site\|ringwork castle |
| Administrative area | Barnard Castle |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/barnard-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 5, road 118, waterway 3, building 85, wall 9, zone 8).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 0, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/274810567 historic=castle Q17644043 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.54333/-1.92667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; archaeological site\|ringwork castle; sitelinks=15; wikidata:Q4185811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/barnard-castle-q4185811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
