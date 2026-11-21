# Fort of San Carlos, Santoña

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-san-carlos-santona-q43154687` |
| Coordinates | 43.43746, -3.43895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.43746/-3.43895)) |
| Wikidata | [Q43154687](https://www.wikidata.org/wiki/Q43154687) (CC0) |
| Wikidata class | fort |
| Types | fort\|monument |
| Administrative area | Santoña |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, zone 2, road 8, building 2, coastline 1, wall 5, cliff 1, water 1).

Evidence: documented 0, mapped 21, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/146078617 historic=castle Q5870618 28 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":309,"medianInside":0,"medianOutside":84.8}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.43746/-3.43895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|monument; sitelinks=1; wikidata:Q43154687 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/fort-of-san-carlos-santona-q43154687.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
