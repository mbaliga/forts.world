# Fortin de Port Maria

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortin-de-port-maria-q3078513` |
| Coordinates | 47.2942, -3.07736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2942/-3.07736)) |
| Wikidata | [Q3078513](https://www.wikidata.org/wiki/Q3078513) (CC0) |
| Wikidata class | fort |
| Types | blockhouse |
| Administrative area | Locmaria |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, road 15, waterway 5, zone 6, coastline 2, cliff 2, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17829631 historic=fort Q22997251 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":10,"medianInside":0,"medianOutside":31.1}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2942/-3.07736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse; sitelinks=2; wikidata:Q3078513 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/fortin-de-port-maria-q3078513.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
