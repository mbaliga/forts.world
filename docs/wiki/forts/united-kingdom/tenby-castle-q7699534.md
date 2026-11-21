# Tenby Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tenby-castle-q7699534` |
| Coordinates | 51.6723, -4.69566 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.6723/-4.69566)) |
| Wikidata | [Q7699534](https://www.wikidata.org/wiki/Q7699534) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Tenby |
| Designations | National Monument of Wales\|Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, road 15, coastline 6, building 2, zone 3, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/475733514 historic=castle Q7592760 329 m from ledger point
- island ring (10683 m2) cut out of sea-0
- origin moved 329 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":364,"medianInside":1.8,"medianOutside":2}
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.6723/-4.69566) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=7; wikidata:Q7699534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/tenby-castle-q7699534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
