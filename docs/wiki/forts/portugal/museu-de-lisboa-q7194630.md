# Museu de Lisboa

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `museu-de-lisboa-q7194630` |
| Coordinates | 38.75847, -9.15663 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.75847/-9.15663)) |
| Wikidata | [Q7194630](https://www.wikidata.org/wiki/Q7194630) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum |
| Administrative area | Lisbon |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | O Palácio Pimenta, ao Campo Grande, é um exemplo bem conservado da arquitectura solarenga setecentista, com quinta associada, construído na primeira metade do séc. XVIII, entre 1744 e 1748, provavelmente por iniciativa de D. João V, com o objectivo |
| OSM `website` | https://www.museudelisboa.pt/ |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 5, road 220, building 42, zone 14, wall 10, retaining-wall 5).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 15, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207662487 historic=castle Q7194630 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.75847/-9.15663) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum; sitelinks=4; wikidata:Q7194630 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/museu-de-lisboa-q7194630.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
