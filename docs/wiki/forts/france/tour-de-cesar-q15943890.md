# Tour de César

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-cesar-q15943890` |
| Coordinates | 46.98636, 1.17437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.98636/1.17437)) |
| Wikidata | [Q15943890](https://www.wikidata.org/wiki/Q15943890) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Châtillon-sur-Indre |
| Inception | C12 |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `website` | https://www.chatillon-sur-indre.fr/pages/son-patrimoine |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 4, zone 7, waterway 2, road 90, building 498, wall 5, retaining-wall 2).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367654975 historic=castle Q15943890 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.98636/1.17437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=2; wikidata:Q15943890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/tour-de-cesar-q15943890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
