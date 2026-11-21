# Porta Palermo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-palermo-q56284686` |
| Coordinates | 37.98112, 12.9689 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.98112/12.9689)) |
| Wikidata | [Q56284686](https://www.wikidata.org/wiki/Q56284686) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Alcamo |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.comune.alcamo.tp.it/it/point-of-interest/castello-dei-conti-di-modica |

## What the model contains

Tier **T1**, status `outline-only`, 271 elements (outline 1, marker 1, road 147, building 314, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21767515 historic=castle Q17624076 243 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 314 mapped (trace size budget); the rest of the town is not drawn
- origin moved 242 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.98112/12.9689) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q56284686 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 271 elements); data/traces/porta-palermo-q56284686.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
