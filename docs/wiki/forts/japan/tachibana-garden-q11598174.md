# Tachibana Garden

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tachibana-garden-q11598174` |
| Coordinates | 33.15819, 130.39827 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.15819/130.39827)) |
| Wikidata | [Q11598174](https://www.wikidata.org/wiki/Q11598174) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|ryokan\|ryōtei\|daimyō garden |
| Administrative area | Yanagawa |
| Inception | 1738 |
| Designations | Place of Scenic Beauty |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | 江戸時代に柳川藩主であった立花伯爵家の邸宅を史跡「御花」として公開している。 The palace of Count Tachibana, who was the lord of YANAGAWA area, is open to the public as a historic site "OHANA". |
| OSM `website` | https://ohana.co.jp/ |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 18, road 298, water 67, waterway 64, zone 18, building 220, wall 7).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360717768 historic=castle Q11598174 13 m from ledger point
- pruned to the outline plus 150 m: 693 -> 410 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 163 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.15819/130.39827) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|ryokan\|ryōtei\|daimyō garden; sitelinks=2; wikidata:Q11598174 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/tachibana-garden-q11598174.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
