# Itri Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `itri-castle-q140291924` |
| Coordinates | 41.28874, 13.53095 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.28874/13.53095)) |
| Wikidata | [Q140291924](https://www.wikidata.org/wiki/Q140291924) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 158 elements (outline 1, marker 2, road 116, building 36, wall 1, zone 2).

Evidence: documented 0, mapped 158, inferred 0, derived 0; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1113000855 historic=castle 28 m from ledger point
- origin moved 29 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.28874/13.53095) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q140291924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 158 elements); data/traces/itri-castle-q140291924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
