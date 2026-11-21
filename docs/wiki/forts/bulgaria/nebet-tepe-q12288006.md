# Nebet Tepe

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nebet-tepe-q12288006` |
| Coordinates | 42.15124, 24.75218 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.15124/24.75218)) |
| Wikidata | [Q12288006](https://www.wikidata.org/wiki/Q12288006) (CC0) |
| Wikidata class | fort |
| Types | hill\|fortress |
| Administrative area | Plovdiv |
| Wikipedia language editions | 8 |
| OSM `historic` | archaeological_site |
| OSM `description` | Останки от крепостни стени и кули, както и първото праисторическо селище, датиращо от халколита (IV–III хилядолетие пр.н.е.). Входът е свободен. |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 2, road 237, wall 30, building 355, waterway 1, zone 8, cliff 1, retaining-wall 3).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 9, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/205315225 historic=archaeological_site Q12288006 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 355 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.15124/24.75218) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hill\|fortress; sitelinks=8; wikidata:Q12288006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/nebet-tepe-q12288006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
