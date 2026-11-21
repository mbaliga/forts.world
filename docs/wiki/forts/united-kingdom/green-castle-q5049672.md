# Green Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `green-castle-q5049672` |
| Coordinates | 51.82485, -4.32845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.82485/-4.32845)) |
| Wikidata | [Q5049672](https://www.wikidata.org/wiki/Q5049672) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortified manor house |
| Administrative area | Llangain |
| Designations | National Monument of Wales |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 34 elements (coastline 1, road 17, waterway 5, zone 5, building 4, water 2).

Evidence: documented 0, mapped 34, inferred 0, derived 2; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":49,"medianInside":1.8,"medianOutside":46.9}
- sea-1: DEM check failed {"cells":382,"medianInside":47.1,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.82485/-4.32845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortified manor house; sitelinks=5; wikidata:Q5049672 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 34 elements); data/traces/green-castle-q5049672.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
