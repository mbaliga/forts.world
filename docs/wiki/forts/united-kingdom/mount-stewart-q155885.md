# Mount Stewart

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mount-stewart-q155885` |
| Coordinates | 54.55157, -5.60188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.55157/-5.60188)) |
| Wikidata | [Q155885](https://www.wikidata.org/wiki/Q155885) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|house\|art museum\|historic house\|historic house museum |
| Administrative area | Newtownards |
| Inception | 2013 |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.nationaltrust.org.uk/mount-stewart/ |

## What the model contains

Tier **T1**, status `outline+walls`, 140 elements (outline 1, coastline 2, road 123, building 11, water 2, wall 1).

Evidence: documented 0, mapped 140, inferred 0, derived 1; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297001236 historic=castle Q155885 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":24,"medianInside":4.5,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.55157/-5.60188) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|house\|art museum\|historic house\|historic house museum; sitelinks=9; wikidata:Q155885 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 140 elements); data/traces/mount-stewart-q155885.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
