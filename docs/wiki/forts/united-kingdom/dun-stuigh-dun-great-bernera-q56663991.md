# Dun Stuigh,dun,Great Bernera

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-stuigh-dun-great-bernera-q56663991` |
| Coordinates | 58.25866, -6.85386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.25866/-6.85386)) |
| Wikidata | [Q56663991](https://www.wikidata.org/wiki/Q56663991) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Outer Hebrides |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, coastline 4, water 5).

Evidence: documented 0, mapped 10, inferred 0, derived 5; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385799230 historic=archaeological_site Q56663991 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":398,"medianInside":3,"medianOutside":11}
- sea-1: DEM check ok {"cells":396,"medianInside":3,"medianOutside":11}
- sea-2: DEM check ok {"cells":366,"medianInside":2.9,"medianOutside":4}
- sea-3: DEM check ok {"cells":399,"medianInside":3,"medianOutside":11}
- sea-4: DEM check ok {"cells":392,"medianInside":3,"medianOutside":11}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.25866/-6.85386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56663991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/dun-stuigh-dun-great-bernera-q56663991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
