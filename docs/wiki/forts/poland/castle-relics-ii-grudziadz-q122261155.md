# Castle relics II, Grudziądz

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-relics-ii-grudziadz-q122261155` |
| Coordinates | 53.49533, 18.74916 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.49533/18.74916)) |
| Wikidata | [Q122261155](https://www.wikidata.org/wiki/Q122261155) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Grudziądz |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Relikty zamku |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 8, waterway 1, road 191, wall 18, building 232, zone 42, retaining-wall 2).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 1, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/179936914 historic=castle Q30035375 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 232 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.49533/18.74916) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q122261155 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/castle-relics-ii-grudziadz-q122261155.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
