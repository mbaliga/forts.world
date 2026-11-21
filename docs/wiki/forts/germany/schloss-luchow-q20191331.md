# Schloss Lüchow

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-luchow-q20191331` |
| Coordinates | 52.96591, 11.15558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.96591/11.15558)) |
| Wikidata | [Q20191331](https://www.wikidata.org/wiki/Q20191331) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Lüchow |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `website` | http://www.amtsturm.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, marker 11, road 119, waterway 2, building 321, zone 4, wall 1, water 1).

Evidence: documented 0, mapped 259, inferred 0, derived 0; heights documented 11, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/206592258 historic=yes Q76636346 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 321 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.96591/11.15558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=2; wikidata:Q20191331 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/schloss-luchow-q20191331.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
