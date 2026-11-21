# Château de Talmont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-talmont-q5118853` |
| Coordinates | 46.46751, -1.61924 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.46751/-1.61924)) |
| Wikidata | [Q5118853](https://www.wikidata.org/wiki/Q5118853) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Talmont-Saint-Hilaire |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | http://www.talmont-saint-hilaire.fr/index.php?module=Contenus&tid=2&filter=pub_category^eq^916&category=916 |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 3, road 81, building 336, water 2, wall 37, zone 3, waterway 5, retaining-wall 6).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 0, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/109469568 historic=castle Q5118853 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 336 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.46751/-1.61924) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=3; wikidata:Q5118853 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/chateau-de-talmont-q5118853.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
