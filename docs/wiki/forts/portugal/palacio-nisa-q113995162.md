# Palácio Nisa

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-nisa-q113995162` |
| Coordinates | 38.72541, -9.11343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72541/-9.11343)) |
| Wikidata | [Q113995162](https://www.wikidata.org/wiki/Q113995162) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Penha de França |
| Designations | Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Fundado em 1543 por D. Francisco da Câmara, segundo conde da Vidigueira, o edifício que passou por diversos proprietários, entre eles os descendentes de Vasco da Gama, em 1634. Regressado à posse dos marqueses de Nisa, em 1672... |
| OSM `website` | http://www.cm-lisboa.pt/equipamentos/equipamento/info/palacio-dos-marqueses-de-nisa |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, road 95, retaining-wall 1, wall 14, building 97, waterway 1, water 1, coastline 1, zone 6).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 21, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5228212 historic=castle Q113995162 9 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72541/-9.11343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q113995162 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/palacio-nisa-q113995162.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
