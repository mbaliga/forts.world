# Fort d'Houat

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-houat-q22997247` |
| Coordinates | 47.38778, -2.96222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.38778/-2.96222)) |
| Wikidata | [Q22997247](https://www.wikidata.org/wiki/Q22997247) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Île-d'Houat |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, marker 1, road 20, coastline 1, building 23, water 2, retaining-wall 1, zone 1, wall 1).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 4, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39812115 historic=castle 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.38778/-2.96222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q22997247 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/fort-d-houat-q22997247.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
