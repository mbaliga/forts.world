# Fortaleza de São José da Ponta Grossa

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sao-jose-da-ponta-grossa-q3078444` |
| Coordinates | -27.43167, -48.51833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-27.43167/-48.51833)) |
| Wikidata | [Q3078444](https://www.wikidata.org/wiki/Q3078444) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Florianópolis |
| Inception | 1740 |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, marker 3, building 12, road 16, coastline 2, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/211031631 historic=fort Q3078444 43 m from ledger point
- origin moved 42 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":171,"medianInside":3.5,"medianOutside":19.8}
- 134 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-27.43167/-48.51833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=5; wikidata:Q3078444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/fortaleza-de-sao-jose-da-ponta-grossa-q3078444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
