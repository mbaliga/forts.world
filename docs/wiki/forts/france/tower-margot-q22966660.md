# Tower Margot

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-margot-q22966660` |
| Coordinates | 50.1366, 1.9497 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1366/1.9497)) |
| Wikidata | [Q22966660](https://www.wikidata.org/wiki/Q22966660) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Saint-Riquier |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 3 |
| OSM `website` | https://www.saint-riquier.fr/culture-et-patrimoine/monuments/maison-du-baron/ |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, marker 1, road 54, building 317, wall 28, zone 7).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 0, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/252153250 historic=building Q22998684 299 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- origin moved 299 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1366/1.9497) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22966660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 211 elements); data/traces/tower-margot-q22966660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
