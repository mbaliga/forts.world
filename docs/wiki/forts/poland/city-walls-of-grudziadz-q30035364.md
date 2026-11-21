# city walls of Grudziądz

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-grudziadz-q30035364` |
| Coordinates | 53.49037, 18.74814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.49037/18.74814)) |
| Wikidata | [Q30035364](https://www.wikidata.org/wiki/Q30035364) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Grudziądz |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 290 elements (marker 20, waterway 16, zone 58, road 600, building 1021, wall 51, retaining-wall 3, cliff 1, water 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 10, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10853018 historic=citywalls Q30035364 183 m from ledger point
- site is a collection relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (238 x 557 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 1021 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 600 mapped (trace size budget); minor lanes are not drawn
- origin moved 280 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.49037/18.74814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q30035364 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 321 elements); data/traces/city-walls-of-grudziadz-q30035364.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
