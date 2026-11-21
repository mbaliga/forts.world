# Tour de la Sergenterie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-la-sergenterie-q22953223` |
| Coordinates | 46.8385, 5.711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8385/5.711)) |
| Wikidata | [Q22953223](https://www.wikidata.org/wiki/Q22953223) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Poligny |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 5, road 101, cliff 1, waterway 9, building 384, wall 14, retaining-wall 2, zone 4).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 2, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80783288 historic=castle Q19950930 150 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- origin moved 149 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8385/5.711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22953223 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/tour-de-la-sergenterie-q22953223.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
