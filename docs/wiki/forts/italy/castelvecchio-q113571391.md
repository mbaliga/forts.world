# Castelvecchio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelvecchio-q113571391` |
| Coordinates | 43.33817, 12.90416 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.33817/12.90416)) |
| Wikidata | [Q113571391](https://www.wikidata.org/wiki/Q113571391) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fabriano |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, road 80, waterway 2, building 229, zone 1, wall 2).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 0, inferred 0, unknown 231.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7202480 historic=monastery 128 m from ledger point
- origin moved 125 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.33817/12.90416) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113571391 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/castelvecchio-q113571391.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
