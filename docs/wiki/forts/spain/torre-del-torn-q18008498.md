# Torre del Torn

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-torn-q18008498` |
| Coordinates | 40.96641, 0.89098 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.96641/0.89098)) |
| Wikidata | [Q18008498](https://www.wikidata.org/wiki/Q18008498) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|defensive tower |
| Administrative area | Vandellòs i l'Hospitalet de l'Infant |
| Designations | Cultural Asset of National Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, road 9, coastline 4, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257305004 historic=ruins Q18008498 0 m from ledger point
- sea-0: DEM check ok {"cells":266,"medianInside":0,"medianOutside":11.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.96641/0.89098) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|defensive tower; sitelinks=2; wikidata:Q18008498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/torre-del-torn-q18008498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
