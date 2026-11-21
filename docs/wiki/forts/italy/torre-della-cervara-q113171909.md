# Torre della Cervara

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-della-cervara-q113171909` |
| Coordinates | 44.31358, 9.21262 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.31358/9.21262)) |
| Wikidata | [Q113171909](https://www.wikidata.org/wiki/Q113171909) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Santa Margherita Ligure |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, road 12, coastline 1, building 26, water 1).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/583586989 historic=castle Q113171909 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":141,"medianInside":0,"medianOutside":61.6}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.31358/9.21262) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=1; wikidata:Q113171909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 41 elements); data/traces/torre-della-cervara-q113171909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
