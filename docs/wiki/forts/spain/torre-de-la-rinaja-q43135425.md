# Torre de la Rinaja

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-rinaja-q43135425` |
| Coordinates | 36.70933, -3.38948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.70933/-3.38948)) |
| Wikidata | [Q43135425](https://www.wikidata.org/wiki/Q43135425) (CC0) |
| Wikidata class | fort |
| Types | fortification\|watchtower |
| Administrative area | Gualchos |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |
| OSM `ruins` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 1, road 5, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/626626249 historic=tower Q43135425 10 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":275,"medianInside":0,"medianOutside":27.8}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.70933/-3.38948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|watchtower; sitelinks=1; wikidata:Q43135425 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/torre-de-la-rinaja-q43135425.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 8 elements; outline osm:way/626626249 historic=tower Q43135425 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
