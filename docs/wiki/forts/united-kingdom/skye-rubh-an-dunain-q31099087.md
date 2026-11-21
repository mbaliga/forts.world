# Skye, Rubh' an Dunain

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skye-rubh-an-dunain-q31099087` |
| Coordinates | 57.16024, -6.30854 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.16024/-6.30854)) |
| Wikidata | [Q31099087](https://www.wikidata.org/wiki/Q31099087) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|defensive\|yes\|promontory fort\|promontory fort |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `castle_type` | defensive |
| OSM `fortification_type` | promontory fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, coastline 3, road 3, zone 5, waterway 1, wall 1, water 2).

Evidence: documented 0, mapped 16, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1386877840 historic=archaeological_site Q31099087 1 m from ledger point
- island ring (546 m2) cut out of sea-0
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":213,"medianInside":1.3,"medianOutside":5.4}
- sea-1: DEM check ok {"cells":392,"medianInside":3,"medianOutside":5.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.16024/-6.30854) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|defensive\|yes\|promontory fort\|promontory fort; sitelinks=0; wikidata:Q31099087 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 16 elements); data/traces/skye-rubh-an-dunain-q31099087.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
