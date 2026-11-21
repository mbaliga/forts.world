# Feraklos Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `feraklos-castle-q27061866` |
| Coordinates | 36.17, 28.09889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.17/28.09889)) |
| Wikidata | [Q27061866](https://www.wikidata.org/wiki/Q27061866) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rodos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `description` | Built by the Knights of St John in the early 1300’s, and was the last stronghold in Rhodes to succumb to the Ottoman Empire in 1523. |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, marker 1, coastline 1, road 15, cliff 6, building 11, zone 1, water 2).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/169075242 historic=castle Q27061866 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":59,"medianInside":10.8,"medianOutside":21.4}
- sea-1: DEM check ok {"cells":186,"medianInside":0,"medianOutside":22}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.17/28.09889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q27061866 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/feraklos-castle-q27061866.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
