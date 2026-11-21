# Castell Tre Ruffydd

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-tre-ruffydd-q31107969` |
| Coordinates | 52.0697, -4.7731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0697/-4.7731)) |
| Wikidata | [Q31107969](https://www.wikidata.org/wiki/Q31107969) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|promontory_fort\|promontory fort |
| Administrative area | Pembrokeshire |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | promontory_fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, waterway 4, road 4, coastline 3, water 2, wall 2, pit 1, building 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/922784075 historic=archaeological_site Q31107969 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":81,"medianInside":12.9,"medianOutside":47.1}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0697/-4.7731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|promontory_fort\|promontory fort; sitelinks=0; wikidata:Q31107969 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/castell-tre-ruffydd-q31107969.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
