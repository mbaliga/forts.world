# Fort McNab

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mcnab-q23010219` |
| Coordinates | 44.6, -63.51667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.6/-63.51667)) |
| Wikidata | [Q23010219](https://www.wikidata.org/wiki/Q23010219) (CC0) |
| Wikidata class | fort |
| Types | fort\|National Historic Site Administered by Parks Canada |
| Administrative area | Halifax |
| Designations | national historic site of Canada |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, marker 2, road 11, zone 2, building 7, waterway 1, water 3, retaining-wall 1, coastline 3).

Evidence: documented 0, mapped 31, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62148424 historic=fort Q23010219 92 m from ledger point
- origin moved 96 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":141,"medianInside":0,"medianOutside":21.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.6/-63.51667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|National Historic Site Administered by Parks Canada; sitelinks=0; wikidata:Q23010219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/fort-mcnab-q23010219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
