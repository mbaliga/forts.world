# Edgarton Mote

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `edgarton-mote-q31058417` |
| Coordinates | 54.94455, -4.07265 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.94455/-4.07265)) |
| Wikidata | [Q31058417](https://www.wikidata.org/wiki/Q31058417) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|contour fort |
| Administrative area | Dumfries and Galloway |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/SM1119 |

## What the model contains

Tier **T1**, status `outline+walls`, 3 elements (outline 1, road 1, wall 1).

Evidence: documented 0, mapped 3, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1262734039 historic=archaeological_site Q31058417 6 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.94455/-4.07265) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|contour fort; sitelinks=0; wikidata:Q31058417 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 3 elements); data/traces/edgarton-mote-q31058417.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
