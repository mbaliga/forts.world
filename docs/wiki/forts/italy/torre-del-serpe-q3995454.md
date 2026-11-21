# Torre del Serpe

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-serpe-q3995454` |
| Coordinates | 40.14188, 18.50525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.14188/18.50525)) |
| Wikidata | [Q3995454](https://www.wikidata.org/wiki/Q3995454) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|yes\|tower |
| Administrative area | Otranto |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, coastline 1, road 12, zone 1, building 3, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/425022074 historic=ruins Q3995454 1 m from ledger point
- sea-0: DEM check ok {"cells":10,"medianInside":0.1,"medianOutside":20.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.14188/18.50525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|yes\|tower; sitelinks=2; wikidata:Q3995454 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 19 elements); data/traces/torre-del-serpe-q3995454.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
