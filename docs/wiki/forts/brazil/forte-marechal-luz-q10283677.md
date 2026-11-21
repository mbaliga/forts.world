# Forte Marechal Luz

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-marechal-luz-q10283677` |
| Coordinates | -26.24333, -48.63806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-26.24333/-48.63806)) |
| Wikidata | [Q10283677](https://www.wikidata.org/wiki/Q10283677) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Santa Catarina |
| Inception | 1909 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `website` | https://pt-br.facebook.com/pages/Restaurante-Portela/115317198549920 |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, road 16, coastline 1, building 4, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/478275329 historic=yes 281 m from ledger point
- origin moved 281 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":227,"medianInside":0.5,"medianOutside":10.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-26.24333/-48.63806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q10283677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 23 elements); data/traces/forte-marechal-luz-q10283677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
