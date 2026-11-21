# Torre Bianca

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-bianca-q113556636` |
| Coordinates | 38.27213, 15.64072 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.27213/15.64072)) |
| Wikidata | [Q113556636](https://www.wikidata.org/wiki/Q113556636) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Messina |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 62 elements (outline 1, road 7, water 2, building 51, coastline 1).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 0, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161940888 historic=castle Q113556636 0 m from ledger point
- sea-0: DEM check ok {"cells":159,"medianInside":0,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.27213/15.64072) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=0; wikidata:Q113556636 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 62 elements); data/traces/torre-bianca-q113556636.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
