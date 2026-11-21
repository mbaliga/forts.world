# Schnabelburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schnabelburg-q69978216` |
| Coordinates | 47.82, 9.0638 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.82/9.0638)) |
| Wikidata | [Q69978216](https://www.wikidata.org/wiki/Q69978216) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Bodman-Ludwigshafen |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | 4 Glocken |
| OSM `website` | https://www.ebfr-glocken.de/gesamtkarte-2/detail/glocke/id/2808-kath-pfarrkirche-st-otmar-in-bodmann-ludwigshafen/?gm=1 |

## What the model contains

Tier **T1**, status `outline-only`, 208 elements (outline 1, marker 2, road 80, building 339, waterway 1, zone 4).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/526677315 historic=yes 346 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 339 mapped (trace size budget); the rest of the town is not drawn
- origin moved 346 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.82/9.0638) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=1; wikidata:Q69978216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 208 elements); data/traces/schnabelburg-q69978216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
