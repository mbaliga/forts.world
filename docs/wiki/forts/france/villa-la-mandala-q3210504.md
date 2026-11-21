# Villa La Mandala

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `villa-la-mandala-q3210504` |
| Coordinates | 43.2685, 6.65194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.2685/6.65194)) |
| Wikidata | [Q3210504](https://www.wikidata.org/wiki/Q3210504) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Saint-Tropez |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 84 elements (outline 1, marker 5, road 27, zone 2, building 46, retaining-wall 1, coastline 1, water 1).

Evidence: documented 0, mapped 84, inferred 0, derived 1; heights documented 3, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/354953957 historic=citywalls 734 m from ledger point
- origin moved 732 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":160,"medianInside":0,"medianOutside":19.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.2685/6.65194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q3210504 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 84 elements); data/traces/villa-la-mandala-q3210504.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
