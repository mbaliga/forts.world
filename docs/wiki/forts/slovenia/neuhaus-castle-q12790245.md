# Neuhaus Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neuhaus-castle-q12790245` |
| Coordinates | 46.36736, 14.31003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.36736/14.31003)) |
| Wikidata | [Q12790245](https://www.wikidata.org/wiki/Q12790245) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Municipality of Tržič |
| Designations | monument of local significance |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 1, road 95, waterway 2, zone 4, building 239, wall 2).

Evidence: documented 0, mapped 344, inferred 0, derived 0; heights documented 2, inferred 0, unknown 239.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/462367176 historic=manor Q12790245 295 m from ledger point
- origin moved 299 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.36736/14.31003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q12790245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 138 elements); data/traces/neuhaus-castle-q12790245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 344 elements; outline osm:way/462367176 historic=manor Q12790245 295 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
