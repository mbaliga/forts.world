# Meierturm

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `meierturm-q24294758` |
| Coordinates | 46.77917, 8.67222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.77917/8.67222)) |
| Wikidata | [Q24294758](https://www.wikidata.org/wiki/Q24294758) (CC0) |
| Wikidata class | fort |
| Types | tower house\|fortified tower\|built structure |
| Administrative area | Silenen |
| Inception | 1300 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |
| OSM `description` | Um 1200 Sitz der Herren v. Klingen. 1971-73 untersucht. (Quelle: Burgenverein.ch) |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, waterway 1, road 41, building 60, wall 1, zone 3).

Evidence: documented 0, mapped 107, inferred 0, derived 0; heights documented 0, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378880167 historic=tower Q24294758 0 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.77917/8.67222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower house\|fortified tower\|built structure; sitelinks=3; wikidata:Q24294758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 109 elements); data/traces/meierturm-q24294758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 107 elements; outline osm:way/378880167 historic=tower Q24294758 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
