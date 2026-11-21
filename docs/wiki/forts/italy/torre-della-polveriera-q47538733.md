# Torre della Polveriera

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-della-polveriera-q47538733` |
| Coordinates | 40.56036, 8.31097 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.56036/8.31097)) |
| Wikidata | [Q47538733](https://www.wikidata.org/wiki/Q47538733) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Alghero |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 5, road 178, wall 27, building 66, coastline 3, zone 10, retaining-wall 4, water 1).

Evidence: documented 0, mapped 295, inferred 0, derived 1; heights documented 8, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/515271876 historic=fort 288 m from ledger point
- origin moved 289 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":101,"medianInside":0,"medianOutside":9.9}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.56036/8.31097) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=2; wikidata:Q47538733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/torre-della-polveriera-q47538733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
