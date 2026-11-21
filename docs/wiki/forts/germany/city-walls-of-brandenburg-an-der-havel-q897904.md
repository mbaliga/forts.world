# City walls of Brandenburg an der Havel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-brandenburg-an-der-havel-q897904` |
| Coordinates | 52.40889, 12.56306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.40889/12.56306)) |
| Wikidata | [Q897904](https://www.wikidata.org/wiki/Q897904) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Brandenburg an der Havel |
| Designations | architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 7, road 153, waterway 3, building 479, water 2, wall 15, zone 1).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 43, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/87550609 historic=yes Q19962135 213 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 479 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 214 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.40889/12.56306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q897904 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/city-walls-of-brandenburg-an-der-havel-q897904.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
