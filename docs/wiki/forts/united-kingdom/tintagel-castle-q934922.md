# Tintagel Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tintagel-castle-q934922` |
| Coordinates | 50.6683, -4.7608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6683/-4.7608)) |
| Wikidata | [Q934922](https://www.wikidata.org/wiki/Q934922) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|local authority museum |
| Administrative area | Tintagel |
| Wikipedia language editions | 31 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | castle |
| OSM `description` | Birthplace of King Arthur (rumoured) |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, coastline 4, road 110, waterway 8, wall 47, cliff 9, building 13, zone 12, water 2).

Evidence: documented 0, mapped 206, inferred 0, derived 2; heights documented 0, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1354036527 historic=archaeological_site Q934922 50 m from ledger point
- island ring (102137 m2) cut out of sea-1
- island ring (624 m2) cut out of sea-1
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":8,"medianInside":5.8,"medianOutside":-1.9}
- sea-1: DEM check ok {"cells":3878,"medianInside":-2.4,"medianOutside":44.6}
- 209 DEM cells below -3 m (bathymetry) clamped to -3 m
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6683/-4.7608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|local authority museum; sitelinks=31; wikidata:Q934922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/tintagel-castle-q934922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
