# Halifax Citadel National Historic Site

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `halifax-citadel-national-historic-site-q22589543` |
| Coordinates | 44.64732, -63.5799 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.64732/-63.5799)) |
| Wikidata | [Q22589543](https://www.wikidata.org/wiki/Q22589543) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Halifax |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |
| OSM `website` | https://parks.canada.ca/lhn-nhs/ns/halifax |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 22, road 330, zone 3, building 67, retaining-wall 1, wall 1, coastline 1).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 26, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1112256004 historic=castle Q321867 41 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- roads capped: kept the 150 longest of 330 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.64732/-63.5799) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q22589543 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/halifax-citadel-national-historic-site-q22589543.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
