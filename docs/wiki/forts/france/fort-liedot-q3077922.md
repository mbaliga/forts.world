# Fort Liédot

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-liedot-q3077922` |
| Coordinates | 46.0225, -1.16443 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0225/-1.16443)) |
| Wikidata | [Q3077922](https://www.wikidata.org/wiki/Q3077922) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Île-d'Aix |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://www.fortliedot.com/ |

## What the model contains

Tier **T1**, status `outline-only`, 69 elements (outline 1, road 22, building 30, zone 13, coastline 1, cliff 1, water 1).

Evidence: documented 0, mapped 69, inferred 0, derived 1; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13152305 historic=fort Q3077922 18 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":21,"medianInside":0,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0225/-1.16443) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3077922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 69 elements); data/traces/fort-liedot-q3077922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
