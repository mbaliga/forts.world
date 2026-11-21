# Belém Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belem-palace-q1144592` |
| Coordinates | 38.6982, -9.20067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.6982/-9.20067)) |
| Wikidata | [Q1144592](https://www.wikidata.org/wiki/Q1144592) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Belém |
| Inception | 1726 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | O início da sua construção remonta ao séc. XVI por iniciativa de D. Manuel de Portugal. Em 1726, D. João V, tendo adquirido a propriedade, procede a melhoramentos, resultando um palácio de recreio com jardim. |
| OSM `website` | https://www.presidencia.pt/ |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, road 234, building 117, retaining-wall 14, wall 37, zone 20, coastline 1, water 10, waterway 9).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 30, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15475183 historic=castle Q1144592 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.6982/-9.20067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=22; wikidata:Q1144592 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/belem-palace-q1144592.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
