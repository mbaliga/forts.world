# Wernigerode Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wernigerode-castle-q538989` |
| Coordinates | 51.83039, 10.79451 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.83039/10.79451)) |
| Wikidata | [Q538989](https://www.wikidata.org/wiki/Q538989) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Wernigerode |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-wernigerode.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 2, road 196, building 182, wall 4, retaining-wall 4, zone 2, waterway 1).

Evidence: documented 0, mapped 392, inferred 0, derived 0; heights documented 7, inferred 0, unknown 183.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/22968143 historic=castle Q538989 12 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.83039/10.79451) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=14; wikidata:Q538989 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/wernigerode-castle-q538989.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
