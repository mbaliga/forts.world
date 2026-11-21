# Kasteel Ten Berghe

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasteel-ten-berghe-q56259046` |
| Coordinates | 51.24038, 3.22647 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.24038/3.22647)) |
| Wikidata | [Q56259046](https://www.wikidata.org/wiki/Q56259046) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Bruges |
| Designations | beschermd monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | https://inventaris.onroerenderfgoed.be/erfgoedobjecten/71856 |

## What the model contains

Tier **T1**, status `outline-only`, 34 elements (outline 1, water 1, building 6, road 11, zone 13, waterway 2).

Evidence: documented 0, mapped 34, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136284676 historic=castle Q56259046 48 m from ledger point
- origin moved 48 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.24038/3.22647) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q56259046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/kasteel-ten-berghe-q56259046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 34 elements; outline osm:way/136284676 historic=castle Q56259046 48 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
