# Château de Sarzay

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-sarzay-q950709` |
| Coordinates | 46.60049, 1.90645 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.60049/1.90645)) |
| Wikidata | [Q950709](https://www.wikidata.org/wiki/Q950709) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sarzay |
| Inception | 1301 |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | Forteresse médiévale du XIVe siècle. Monument historique classé. |
| OSM `ruins` | no |
| OSM `website` | https://sarzay.net/ |

## What the model contains

Tier **T1**, status `outline+walls`, 143 elements (outline 1, marker 1, road 62, wall 6, zone 8, building 63, water 1, waterway 1).

Evidence: documented 0, mapped 143, inferred 0, derived 0; heights documented 9, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/258316522 historic=castle Q950709 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.60049/1.90645) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q950709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 143 elements); data/traces/chateau-de-sarzay-q950709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
