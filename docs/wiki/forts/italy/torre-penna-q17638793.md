# Torre Penna

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-penna-q17638793` |
| Coordinates | 40.6841, 17.93696 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.6841/17.93696)) |
| Wikidata | [Q17638793](https://www.wikidata.org/wiki/Q17638793) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Brindisi |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 21 elements (outline 1, coastline 1, road 15, building 2, water 2).

Evidence: documented 0, mapped 21, inferred 0, derived 2; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422354190 historic=ruins 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":48,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":10,"medianInside":0.1,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.6841/17.93696) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=2; wikidata:Q17638793 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 21 elements); data/traces/torre-penna-q17638793.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
