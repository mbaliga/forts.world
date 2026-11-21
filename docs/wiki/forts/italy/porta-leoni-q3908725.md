# Porta Leoni

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-leoni-q3908725` |
| Coordinates | 45.44049, 10.99962 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.44049/10.99962)) |
| Wikidata | [Q3908725](https://www.wikidata.org/wiki/Q3908725) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|Roman archaeological site |
| Administrative area | Verona |
| Designations | Italian national heritage |
| Wikipedia language editions | 11 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 7, road 136, waterway 1, water 4, zone 7, wall 3, building 93, retaining-wall 2).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 27, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138810076 historic=citywalls Q3909325 688 m from ledger point
- origin moved 687 m from the ledger point to the outline centroid
- 35 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.44049/10.99962) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|Roman archaeological site; sitelinks=11; wikidata:Q3908725 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/porta-leoni-q3908725.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
