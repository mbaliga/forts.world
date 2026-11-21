# Forte da Ínsua

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-da-insua-q10283763` |
| Coordinates | 41.85917, -8.87472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.85917/-8.87472)) |
| Wikidata | [Q10283763](https://www.wikidata.org/wiki/Q10283763) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Moledo e Cristelo |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `heritage` | https://imovel.patrimoniocultural.gov.pt/detalhes.php?code=70476 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, marker 1, wall 25, building 4, road 16, coastline 1, zone 2).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129922525 historic=fort Q10283763 10 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 11 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.85917/-8.87472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=7; wikidata:Q10283763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/forte-da-insua-q10283763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
