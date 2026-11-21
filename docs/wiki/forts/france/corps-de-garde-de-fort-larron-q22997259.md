# Corps de garde de Fort Larron

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `corps-de-garde-de-fort-larron-q22997259` |
| Coordinates | 47.3313, -3.14299 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3313/-3.14299)) |
| Wikidata | [Q22997259](https://www.wikidata.org/wiki/Q22997259) (CC0) |
| Wikidata class | fort |
| Types | fort\|guardhouse |
| Administrative area | Le Palais |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, building 2, road 5, zone 4, coastline 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63478467 historic=fort Q22997259 2 m from ledger point
- sea-0: DEM check ok {"cells":87,"medianInside":0,"medianOutside":16.7}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3313/-3.14299) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|guardhouse; sitelinks=1; wikidata:Q22997259 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/corps-de-garde-de-fort-larron-q22997259.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
