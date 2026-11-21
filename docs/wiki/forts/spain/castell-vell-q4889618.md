# Castell Vell

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-vell-q4889618` |
| Coordinates | 40.035, -0.00528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.035/-0.00528)) |
| Wikidata | [Q4889618](https://www.wikidata.org/wiki/Q4889618) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Castellón de la Plana |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | Castell també anomenat com a Castell de la Magdalena, dels Moros o de Sas. És d'origen musulmà construït entre els segles XI i XIII. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 74 elements (outline 1, marker 1, road 42, zone 5, waterway 2, wall 17, building 5, water 1).

Evidence: documented 0, mapped 74, inferred 0, derived 0; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1018613163 historic=castle Q4889618 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.035/-0.00528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q4889618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 74 elements); data/traces/castell-vell-q4889618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
