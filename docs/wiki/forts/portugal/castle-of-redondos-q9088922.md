# Castle of Redondos

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-redondos-q9088922` |
| Coordinates | 40.16682, -8.87706 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.16682/-8.87706)) |
| Wikidata | [Q9088922](https://www.wikidata.org/wiki/Q9088922) (CC0) |
| Wikidata class | ruin |
| Types | castle\|tower\|ruins\|cultural heritage |
| Administrative area | Buarcos e São Julião |
| Designations | Immovable Cultural Heritage of Municipal Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 6, road 192, zone 4, building 53, coastline 1, wall 26, retaining-wall 4, water 1).

Evidence: documented 0, mapped 288, inferred 0, derived 1; heights documented 0, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10076011 historic=castle Q17390191 264 m from ledger point
- origin moved 283 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":322,"medianInside":0,"medianOutside":11.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.16682/-8.87706) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|tower\|ruins\|cultural heritage; sitelinks=4; wikidata:Q9088922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/castle-of-redondos-q9088922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
