# Schloss Reimlingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-reimlingen-q2243102` |
| Coordinates | 48.81672, 10.51432 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81672/10.51432)) |
| Wikidata | [Q2243102](https://www.wikidata.org/wiki/Q2243102) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Reimlingen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | yes |
| OSM `description` | Kulturgut i.S. der Haager Konvention |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, road 72, zone 2, building 111, wall 12).

Evidence: documented 0, mapped 198, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117057849 historic=castle Q2243102 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81672/10.51432) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=2; wikidata:Q2243102 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 198 elements); data/traces/schloss-reimlingen-q2243102.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
