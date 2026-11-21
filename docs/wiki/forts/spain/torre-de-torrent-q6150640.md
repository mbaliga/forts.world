# Torre de Torrent

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-torrent-q6150640` |
| Coordinates | 39.4365, -0.46343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.4365/-0.46343)) |
| Wikidata | [Q6150640](https://www.wikidata.org/wiki/Q6150640) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Torrent |
| Inception | 1070 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `description` | Edificio militar de interés etnológico y arquitectónico |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 2, road 107, waterway 1, building 1561, zone 1, wall 2).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 120, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/333759081 historic=castle Q6150640 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1561 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.4365/-0.46343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q6150640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/torre-de-torrent-q6150640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
