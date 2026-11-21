# York Cold War Bunker

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `york-cold-war-bunker-q12073377` |
| Coordinates | 53.9568, -1.1167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.9568/-1.1167)) |
| Wikidata | [Q12073377](https://www.wikidata.org/wiki/Q12073377) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|military museum\|Royal Observer Corps Group Headquarters |
| Administrative area | City of York |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | bunker |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/york-cold-war-bunker/ |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, road 82, building 177, zone 4, wall 5, retaining-wall 3).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 13, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117420246 historic=bunker Q12073377 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.9568/-1.1167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|military museum\|Royal Observer Corps Group Headquarters; sitelinks=2; wikidata:Q12073377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 273 elements); data/traces/york-cold-war-bunker-q12073377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 272 elements; outline osm:way/117420246 historic=bunker Q12073377 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
