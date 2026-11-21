# Castelo de Geraldo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-geraldo-q18482086` |
| Coordinates | 38.53807, -8.03311 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.53807/-8.03311)) |
| Wikidata | [Q18482086](https://www.wikidata.org/wiki/Q18482086) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage\|hillfort\|archaeological site |
| Administrative area | Nossa Senhora da Tourega e Nossa Senhora de Guadalupe |
| Designations | heritage without legal protection |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | no |
| OSM `barrier` | city_wall |
| OSM `website` | https://fortalezas.org/index.php?ct=fortaleza&id_fortaleza=1998&muda_idioma=PT |

## What the model contains

Tier **T1**, status `outline+walls`, 7 elements (outline 1, road 4, zone 1).

Evidence: documented 0, mapped 7, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/313245291 historic=archaeological_site Q18482086 67 m from ledger point
- origin moved 66 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.53807/-8.03311) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage\|hillfort\|archaeological site; sitelinks=4; wikidata:Q18482086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 7 elements); data/traces/castelo-de-geraldo-q18482086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
