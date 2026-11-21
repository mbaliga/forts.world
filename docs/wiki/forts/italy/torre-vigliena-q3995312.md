# Torre Vigliena

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-vigliena-q3995312` |
| Coordinates | 36.81499, 14.46029 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.81499/14.46029)) |
| Wikidata | [Q3995312](https://www.wikidata.org/wiki/Q3995312) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|yes\|tower |
| Administrative area | Santa Croce Camerina |
| Inception | 1595 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, road 1, waterway 1, building 11, zone 1, coastline 1, wall 1, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/244069951 historic=ruins Q3995312 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":324,"medianInside":0,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.81499/14.46029) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|yes\|tower; sitelinks=2; wikidata:Q3995312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/torre-vigliena-q3995312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
