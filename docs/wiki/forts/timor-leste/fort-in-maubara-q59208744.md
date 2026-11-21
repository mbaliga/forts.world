# Fort in Maubara

> Timor-Leste · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-in-maubara-q59208744` |
| Coordinates | -8.61039, 125.20444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-8.61039/125.20444)) |
| Wikidata | [Q59208744](https://www.wikidata.org/wiki/Q59208744) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Vaviquinia |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 85 elements (marker 2, waterway 1, building 70, zone 2, road 7, coastline 1, water 2).

Evidence: documented 0, mapped 85, inferred 0, derived 1; heights documented 0, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":139,"medianInside":2.7,"medianOutside":13.4}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-8.61039/125.20444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=4; wikidata:Q59208744 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 85 elements); data/traces/fort-in-maubara-q59208744.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/timor-leste.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
