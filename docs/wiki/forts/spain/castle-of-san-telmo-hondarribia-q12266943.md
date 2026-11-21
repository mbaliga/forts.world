# Castle of San Telmo, Hondarribia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-telmo-hondarribia-q12266943` |
| Coordinates | 43.38966, -1.78951 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.38966/-1.78951)) |
| Wikidata | [Q12266943](https://www.wikidata.org/wiki/Q12266943) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle |
| Administrative area | Hondarribia |
| Designations | Basque government heritage site |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, coastline 2, road 11, building 9, zone 5, water 2).

Evidence: documented 0, mapped 30, inferred 0, derived 2; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117961722 historic=castle Q12266943 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":20,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":178,"medianInside":0,"medianOutside":17.9}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.38966/-1.78951) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle; sitelinks=2; wikidata:Q12266943 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/castle-of-san-telmo-hondarribia-q12266943.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
