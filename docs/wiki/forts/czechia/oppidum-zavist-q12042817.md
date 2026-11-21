# Oppidum Závist

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oppidum-zavist-q12042817` |
| Coordinates | 49.96222, 14.40806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.96222/14.40806)) |
| Wikidata | [Q12042817](https://www.wikidata.org/wiki/Q12042817) (CC0) |
| Wikidata class | fortification |
| Types | oppidum\|Celtic archaeological site |
| Administrative area | Lhota |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 97 elements (marker 1, road 71, building 15, waterway 7, zone 2, cliff 1).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 4, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18297465 historic=archaeological_site Q12042817 625 m from ledger point
- site is a site relation of 20 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1228 x 1507 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.96222/14.40806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum\|Celtic archaeological site; sitelinks=7; wikidata:Q12042817 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 97 elements); data/traces/oppidum-zavist-q12042817.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
