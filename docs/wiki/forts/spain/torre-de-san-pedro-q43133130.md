# Torre de San Pedro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-san-pedro-q43133130` |
| Coordinates | 36.90337, -1.9806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.90337/-1.9806)) |
| Wikidata | [Q43133130](https://www.wikidata.org/wiki/Q43133130) (CC0) |
| Wikidata class | fortification |
| Types | monument\|watchtower |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://guiadigital.iaph.es/bien/inmueble/11986/almeria/nijar/castillo-de-san-pedro |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, road 20, coastline 4, building 18, water 2, waterway 1).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1577045168 historic=castle Q43133161 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":131,"medianInside":0,"medianOutside":40.5}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.90337/-1.9806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|watchtower; sitelinks=0; wikidata:Q43133130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/torre-de-san-pedro-q43133130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
