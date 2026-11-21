# Zoutleeuw

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zoutleeuw-q227070` |
| Coordinates | 50.8333, 5.1036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8333/5.1036)) |
| Wikidata | [Q227070](https://www.wikidata.org/wiki/Q227070) (CC0) |
| Wikidata class | fort |
| Types | municipality of Belgium\|fortified town\|Belgian municipality with the title of city |
| Administrative area | Arrondissement of Leuven |
| Wikipedia language editions | 34 |
| OSM `historic` | building |
| OSM `heritage` | 4 |
| OSM `description` | Hal opgetrokken nadat hertog Jan III hiertoe de toelating verstrekt had, na zijn bezoek aan de stad circa 1316. Beurtelings gebruikt als broodhuis (1359), schepenhuis (1361), laken- en vleeshal (respectievelijk 1368 en 1374) en ten slotte als gildekamer. |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 5, road 87, waterway 9, building 463, zone 14, water 5, wall 1).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236756556 historic=building Q107997817 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 463 mapped (trace size budget); the rest of the town is not drawn
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8333/5.1036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; municipality of Belgium\|fortified town\|Belgian municipality with the title of city; sitelinks=34; wikidata:Q227070 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/zoutleeuw-q227070.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
