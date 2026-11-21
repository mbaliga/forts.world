# King John's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-john-s-castle-q8704043` |
| Coordinates | 54.04318, -6.18683 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.04318/-6.18683)) |
| Wikidata | [Q8704043](https://www.wikidata.org/wiki/Q8704043) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Carlingford |
| Designations | national monument of Ireland |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 166 elements (outline 1, coastline 1, road 36, building 104, zone 10, wall 13, water 1).

Evidence: documented 0, mapped 166, inferred 0, derived 1; heights documented 46, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133612912 historic=castle Q8704043 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":747,"medianInside":0,"medianOutside":14.9}
- 31 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.04318/-6.18683) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q8704043 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 166 elements); data/traces/king-john-s-castle-q8704043.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
