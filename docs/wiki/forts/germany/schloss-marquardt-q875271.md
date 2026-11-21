# Schloss Marquardt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-marquardt-q875271` |
| Coordinates | 52.45796, 12.96317 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.45796/12.96317)) |
| Wikidata | [Q875271](https://www.wikidata.org/wiki/Q875271) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Potsdam |
| Inception | ~1660 |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Ehem. Herrenhaus. Datierung um 1660; Brand & Wiederaufbau 1791; Erweiterung/Umbau 1878/1880 & 1893/1895; Erweiterung 1904/1912. |

## What the model contains

Tier **T1**, status `outline+walls`, 174 elements (outline 1, marker 3, water 3, road 79, building 78, zone 5, wall 4, waterway 1).

Evidence: documented 0, mapped 174, inferred 0, derived 0; heights documented 22, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45497747 historic=castle Q875271 4 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.45796/12.96317) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=5; wikidata:Q875271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 174 elements); data/traces/schloss-marquardt-q875271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
