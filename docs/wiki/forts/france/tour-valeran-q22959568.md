# Tour Valéran

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-valeran-q22959568` |
| Coordinates | 48.69038, 5.32706 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.69038/5.32706)) |
| Wikidata | [Q22959568](https://www.wikidata.org/wiki/Q22959568) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ligny-en-Barrois |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | tower |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 180 elements (outline 1, road 53, zone 3, waterway 2, building 551, wall 1).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225108437 historic=tower Q22959568 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 551 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.69038/5.32706) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22959568 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 179 elements); data/traces/tour-valeran-q22959568.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 180 elements; outline osm:way/225108437 historic=tower Q22959568 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
