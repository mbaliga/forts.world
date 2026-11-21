# Forte de Santa Apolónia

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-santa-apolonia-q10283887` |
| Coordinates | 38.72367, -9.11671 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72367/-9.11671)) |
| Wikidata | [Q10283887](https://www.wikidata.org/wiki/Q10283887) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Penha de França |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Fundado em 1543 por D. Francisco da Câmara, segundo conde da Vidigueira, o edifício que passou por diversos proprietários, entre eles os descendentes de Vasco da Gama, em 1634. Regressado à posse dos marqueses de Nisa, em 1672... |
| OSM `website` | http://www.cm-lisboa.pt/equipamentos/equipamento/info/palacio-dos-marqueses-de-nisa |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, road 95, retaining-wall 1, wall 14, building 97, waterway 1, water 1, coastline 1, zone 6).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 21, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5228212 historic=castle Q113995162 344 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 336 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72367/-9.11671) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q10283887 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/forte-de-santa-apolonia-q10283887.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
