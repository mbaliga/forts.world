# Fort Muttrah

> Oman · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-muttrah-q10283814` |
| Coordinates | 23.6205, 58.56731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.6205/58.56731)) |
| Wikidata | [Q10283814](https://www.wikidata.org/wiki/Q10283814) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Muttrah |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 87 elements (outline 1, road 48, building 33, zone 1, wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 87, inferred 0, derived 1; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284633867 historic=fort 20 m from ledger point
- origin moved 21 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":122,"medianInside":2,"medianOutside":11.9}
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.6205/58.56731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q10283814 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 87 elements); data/traces/fort-muttrah-q10283814.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/oman.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
