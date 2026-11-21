# Forte de Santa Maria da Arrábida

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-santa-maria-da-arrabida-q10283909` |
| Coordinates | 38.4738, -8.9829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.4738/-8.9829)) |
| Wikidata | [Q10283909](https://www.wikidata.org/wiki/Q10283909) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Azeitão (São Lourenço e São Simão) |
| Designations | Included in protected site |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, road 6, coastline 1, building 11, zone 2, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184279842 historic=castle Q10283909 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":260,"medianInside":0,"medianOutside":16.6}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.4738/-8.9829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q10283909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/forte-de-santa-maria-da-arrabida-q10283909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
