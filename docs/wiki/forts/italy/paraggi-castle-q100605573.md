# Paraggi Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paraggi-castle-q100605573` |
| Coordinates | 44.31057, 9.21296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.31057/9.21296)) |
| Wikidata | [Q100605573](https://www.wikidata.org/wiki/Q100605573) (CC0) |
| Wikidata class | castle |
| Types | villa\|castle |
| Administrative area | Santa Margherita Ligure |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, road 12, coastline 1, building 26, water 1).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/583586989 historic=castle Q113171909 334 m from ledger point
- origin moved 335 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":141,"medianInside":0,"medianOutside":61.6}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.31057/9.21296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; villa\|castle; sitelinks=6; wikidata:Q100605573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 41 elements); data/traces/paraggi-castle-q100605573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
