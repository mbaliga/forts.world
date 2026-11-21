# Dunstaffnage Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunstaffnage-castle-q178522` |
| Coordinates | 56.45465, -5.43694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.45465/-5.43694)) |
| Wikidata | [Q178522](https://www.wikidata.org/wiki/Q178522) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Inception | 1220 |
| Designations | scheduled monument |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 11, coastline 1, wall 6, building 1, zone 1, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1271336 historic=castle Q178522 49 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":867,"medianInside":4.3,"medianOutside":9.4}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.45465/-5.43694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=19; wikidata:Q178522 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/dunstaffnage-castle-q178522.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
