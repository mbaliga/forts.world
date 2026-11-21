# Chiavari Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chiavari-castle-q3662567` |
| Coordinates | 44.31874, 9.32624 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.31874/9.32624)) |
| Wikidata | [Q3662567](https://www.wikidata.org/wiki/Q3662567) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Chiavari |
| Inception | 1146 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 333 elements (outline 1, marker 2, road 74, coastline 1, building 245, zone 8, waterway 1, retaining-wall 1).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 2, inferred 0, unknown 244.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/120597926 historic=castle Q3662567 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.31874/9.32624) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 333 elements); data/traces/chiavari-castle-q3662567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
