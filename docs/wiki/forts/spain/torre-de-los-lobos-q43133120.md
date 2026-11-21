# Torre de los Lobos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-los-lobos-q43133120` |
| Coordinates | 36.84097, -2.00316 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.84097/-2.00316)) |
| Wikidata | [Q43133120](https://www.wikidata.org/wiki/Q43133120) (CC0) |
| Wikidata class | fort |
| Types | lighthouse\|fortification |
| Inception | 1991 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | watchtower |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, road 5, building 2, cliff 2, wall 2, coastline 1, zone 1, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/198191164 historic=watchtower Q43133120 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":-0.6,"medianOutside":221.1}
- 18 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.84097/-2.00316) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; lighthouse\|fortification; sitelinks=4; wikidata:Q43133120 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 15 elements); data/traces/torre-de-los-lobos-q43133120.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 15 elements; outline osm:way/198191164 historic=watchtower Q43133120 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
