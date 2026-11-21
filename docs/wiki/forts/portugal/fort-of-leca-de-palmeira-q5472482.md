# Fort of Leça de Palmeira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-leca-de-palmeira-q5472482` |
| Coordinates | 41.18761, -8.70227 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.18761/-8.70227)) |
| Wikidata | [Q5472482](https://www.wikidata.org/wiki/Q5472482) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Matosinhos e Leça da Palmeira |
| Inception | 1638 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | https://www.amn.pt/PM/Comandos/Leixoes/Paginas/Comando-Local-de-Leixoes.aspx |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 2, road 108, building 203, coastline 1, waterway 1, wall 23, zone 1).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 37, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108385898 historic=fort Q5472482 9 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.18761/-8.70227) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q5472482 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/fort-of-leca-de-palmeira-q5472482.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
