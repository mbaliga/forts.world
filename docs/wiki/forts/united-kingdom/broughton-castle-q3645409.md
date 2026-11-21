# Broughton Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `broughton-castle-q3645409` |
| Coordinates | 52.0404, -1.39187 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0404/-1.39187)) |
| Wikidata | [Q3645409](https://www.wikidata.org/wiki/Q3645409) (CC0) |
| Wikidata class | castle |
| Types | castle\|English country house\|country house\|historic house museum |
| Administrative area | Broughton |
| Designations | Grade II listed park and garden\|Grade I listed building |
| Wikipedia language editions | 9 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, road 24, waterway 6, building 5, zone 5, wall 4, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158551451 historic=manor Q3645409 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0404/-1.39187) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|English country house\|country house\|historic house museum; sitelinks=9; wikidata:Q3645409 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 46 elements); data/traces/broughton-castle-q3645409.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 46 elements; outline osm:way/158551451 historic=manor Q3645409 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
