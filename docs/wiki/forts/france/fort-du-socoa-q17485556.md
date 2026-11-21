# Fort du Socoa

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-socoa-q17485556` |
| Coordinates | 43.39603, -1.68339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.39603/-1.68339)) |
| Wikidata | [Q17485556](https://www.wikidata.org/wiki/Q17485556) (CC0) |
| Wikidata class | fort |
| Types | fortress\|fort |
| Administrative area | Ciboure |
| Inception | 1627 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Première construction en 1640 par Henry IV. Fort actuel faisant parti du complexe de défense national de Vauban. Bâti entre 1686 et 1698.  |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, marker 1, coastline 3, road 19, building 37, cliff 1, wall 6, water 3).

Evidence: documented 0, mapped 71, inferred 0, derived 3; heights documented 0, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72602868 historic=fort Q17485556 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":394,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":128,"medianInside":0.2,"medianOutside":0}
- sea-2: DEM check ok {"cells":183,"medianInside":0,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.39603/-1.68339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|fort; sitelinks=2; wikidata:Q17485556 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 70 elements); data/traces/fort-du-socoa-q17485556.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 71 elements; outline osm:way/72602868 historic=fort Q17485556 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
