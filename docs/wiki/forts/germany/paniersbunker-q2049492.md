# Paniersbunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paniersbunker-q2049492` |
| Coordinates | 49.4583, 11.0808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4583/11.0808)) |
| Wikidata | [Q2049492](https://www.wikidata.org/wiki/Q2049492) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|rock cellar |
| Administrative area | Nuremberg |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 4, road 185, zone 5, wall 22, building 215).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 54, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136180830 historic=citywalls Q98630466 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 43 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4583/11.0808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|rock cellar; sitelinks=2; wikidata:Q2049492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/paniersbunker-q2049492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
