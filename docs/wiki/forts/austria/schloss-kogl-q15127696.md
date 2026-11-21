# Schloss Kogl

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-kogl-q15127696` |
| Coordinates | 47.9484, 14.46559 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.9484/14.46559)) |
| Wikidata | [Q15127696](https://www.wikidata.org/wiki/Q15127696) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Laussa |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.burgenkunde.at/oberoesterreich/kogl_ennstal/kogl.htm |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, road 20, building 10, waterway 6, zone 4).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1692112 historic=castle Q15127696 4 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.9484/14.46559) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q15127696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 41 elements); data/traces/schloss-kogl-q15127696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
