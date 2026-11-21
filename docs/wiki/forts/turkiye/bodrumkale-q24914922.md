# Bodrumkale

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bodrumkale-q24914922` |
| Coordinates | 37.1773, 36.18718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.1773/36.18718)) |
| Wikidata | [Q24914922](https://www.wikidata.org/wiki/Q24914922) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|yes\|citadel |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | citadel |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, road 5, zone 2).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/188049370 historic=archaeological_site Q24914922 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.1773/36.18718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|yes\|citadel; sitelinks=4; wikidata:Q24914922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 9 elements); data/traces/bodrumkale-q24914922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
