# Bakås skanse

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bakas-skanse-q11960061` |
| Coordinates | 59.93483, 10.91088 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.93483/10.91088)) |
| Wikidata | [Q11960061](https://www.wikidata.org/wiki/Q11960061) (CC0) |
| Wikidata class | fort |
| Types | fortification\|cultural property |
| Administrative area | Alna |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, road 48, zone 1, waterway 1).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/304729330 historic=archaeological_site 353 m from ledger point
- origin moved 352 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.93483/10.91088) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|cultural property; sitelinks=2; wikidata:Q11960061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 52 elements); data/traces/bakas-skanse-q11960061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
