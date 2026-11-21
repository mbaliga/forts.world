# Fort Tartenson

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tartenson-q3078080` |
| Coordinates | 14.6, -61.0833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.6/-61.0833)) |
| Wikidata | [Q3078080](https://www.wikidata.org/wiki/Q3078080) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Fort-de-France |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 246 elements (outline 1, road 29, coastline 1, building 212, water 2, retaining-wall 1).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 1, inferred 0, unknown 212.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8223600 historic=archaeological_site Q22980909 680 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 681 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.6/-61.0833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078080 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 246 elements); data/traces/fort-tartenson-q3078080.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
