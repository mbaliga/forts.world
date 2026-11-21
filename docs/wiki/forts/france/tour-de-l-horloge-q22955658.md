# Tour de l'Horloge

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-l-horloge-q22955658` |
| Coordinates | 45.9434, -0.5204 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.9434/-0.5204)) |
| Wikidata | [Q22955658](https://www.wikidata.org/wiki/Q22955658) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Saint-Jean-d'Angély |
| Inception | 1275 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 1, road 135, waterway 2, building 736, zone 3, wall 10).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 4, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89437533 historic=building Q22955658 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 736 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.9434/-0.5204) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22955658 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/tour-de-l-horloge-q22955658.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
