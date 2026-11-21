# Galveias Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `galveias-palace-q5519418` |
| Coordinates | 38.74146, -9.14365 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.74146/-9.14365)) |
| Wikidata | [Q5519418](https://www.wikidata.org/wiki/Q5519418) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Avenidas Novas |
| Inception | C17 |
| Designations | Pending classification monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Antiga residência secundária dos Távoras,datada de meados do séc. XVII,e que mais tarde pertenceu aos condes de Galveias.Caracteriza-se por uma inovadora planta em U,de influência francesa,rigor e simetria,sendo o pátio nobre,em quadra regular... |
| OSM `website` | https://blx.cm-lisboa.pt/horarios-e-contactos/biblioteca-palacio-galveias/ |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 3, road 207, zone 2, building 175, retaining-wall 5, wall 13, water 1).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 18, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97694753 historic=castle Q5519418 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 175 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.74146/-9.14365) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=4; wikidata:Q5519418 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/galveias-palace-q5519418.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
