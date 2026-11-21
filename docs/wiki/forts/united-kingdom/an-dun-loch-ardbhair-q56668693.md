# An Dun, Loch Ardbhair

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `an-dun-loch-ardbhair-q56668693` |
| Coordinates | 58.24961, -5.12202 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.24961/-5.12202)) |
| Wikidata | [Q56668693](https://www.wikidata.org/wiki/Q56668693) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, coastline 3, building 1, zone 1, waterway 1, water 3).

Evidence: documented 0, mapped 10, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385065889 historic=archaeological_site Q56668693 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.6}
- sea-1: DEM check ok {"cells":317,"medianInside":2.5,"medianOutside":11.1}
- sea-2: DEM check ok {"cells":323,"medianInside":2.8,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.24961/-5.12202) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=1; wikidata:Q56668693 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/an-dun-loch-ardbhair-q56668693.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
