# Porta dei Greci

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-dei-greci-q3908894` |
| Coordinates | 38.11616, 13.37399 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.11616/13.37399)) |
| Wikidata | [Q3908894](https://www.wikidata.org/wiki/Q3908894) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Palermo |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 4, road 89, building 119, wall 4, zone 21, coastline 1, water 1).

Evidence: documented 0, mapped 240, inferred 0, derived 1; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233807186 historic=yes 166 m from ledger point
- origin moved 164 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":7,"medianInside":0,"medianOutside":9.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.11616/13.37399) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q3908894 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/porta-dei-greci-q3908894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
