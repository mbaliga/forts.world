# Krasnoyarskaya Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `krasnoyarskaya-fortress-q4239226` |
| Coordinates | 53.49694, 50.40194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.49694/50.40194)) |
| Wikidata | [Q4239226](https://www.wikidata.org/wiki/Q4239226) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Krasnyy Yar |
| Inception | 1732 |
| Designations | tentative cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, road 39, water 2, zone 3, building 64, wall 1).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 9, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30293533 historic=castle 18 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.49694/50.40194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q4239226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/krasnoyarskaya-fortress-q4239226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
