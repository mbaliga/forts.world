# Fort Copacabana

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-copacabana-q5470982` |
| Coordinates | -22.98583, -43.18528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-22.98583/-43.18528)) |
| Wikidata | [Q5470982](https://www.wikidata.org/wiki/Q5470982) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Copacabana |
| Inception | 1908 |
| Designations | INEPAC Good Class\|heritage asset listed by IPHAN |
| Wikipedia language editions | 22 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, road 15, coastline 3, building 2, zone 6, wall 1, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/371926003 historic=fort Q5470982 45 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1325,"medianInside":-5,"medianOutside":7.9}
- 4935 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-22.98583/-43.18528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=22; wikidata:Q5470982 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/fort-copacabana-q5470982.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
