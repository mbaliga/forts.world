# Fort Béar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-bear-q20669672` |
| Coordinates | 42.51617, 3.12463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.51617/3.12463)) |
| Wikidata | [Q20669672](https://www.wikidata.org/wiki/Q20669672) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Port-Vendres |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, marker 7, coastline 1, road 24, building 22, retaining-wall 1, wall 3, water 2).

Evidence: documented 0, mapped 61, inferred 0, derived 2; heights documented 1, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/363337413 historic=castle Q18337934 674 m from ledger point
- origin moved 674 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":5.2}
- sea-1: DEM check ok {"cells":143,"medianInside":0,"medianOutside":15.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.51617/3.12463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q20669672 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/fort-bear-q20669672.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
