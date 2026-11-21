# Fort Graf Miljutin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-graf-miljutin-q112663849` |
| Coordinates | 59.97222, 29.69583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.97222/29.69583)) |
| Wikidata | [Q112663849](https://www.wikidata.org/wiki/Q112663849) (CC0) |
| Wikidata class | fort |
| Types | fort\|architectural landmark\|part of UNESCO World Heritage Site\|artillery battery |
| Administrative area | Kronstadt |
| Inception | 1855 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-003b 16 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | http://www.gov.spb.ru/law?d&nd=8414528&nh=0&header=010000000P01#I0 |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 3, road 7).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/714996892 historic=fort 19 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 19 m from the ledger point to the centre of the mapped site
- 744 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.97222/29.69583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|architectural landmark\|part of UNESCO World Heritage Site\|artillery battery; sitelinks=2; wikidata:Q112663849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/fort-graf-miljutin-q112663849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
